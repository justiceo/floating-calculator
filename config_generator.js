// This script generates the _config.yml for the Github page (landing page) of the extension, copies assets and generates i18n.
// The preference for overrides is manifest.json > package.json > site_config.yml
//
// Command: node website/config_generator.js
//
// TODO:
// * Handle i18n in manifest.json.
const fs = require("fs");

class ConfigGenerator {
  manifestPath = "src/manifest.json";
  packageJsonPath = "package.json";
  jekyllConfigPath = "website/site_config.yml";
  outputConfigPath = "website/__config.yml";
  args;

  constructor() {
    const args = this.parse(process.argv);
    this.args = args;

    if (args.manifest) {
      this.manifestPath = args.manifest.trim();
    }
    if (args.packageJson) {
      this.packageJsonPath = args.manifest.trim();
    }
    if (args.jekyllConfig) {
      this.jekyllConfigPath = args.jekyllConfig.trim();
    }

    console.log(
      `Using manifest: ${this.manifestPath}, package.json: ${this.packageJsonPath}, jekyll config: ${this.jekyllConfigPath}.`
    );
    this.run();
  }

  parse(argv) {
    const ARGUMENT_SEPARATION_REGEX = /([^=\s]+)=?\s*(.*)/;

    // Removing node/bin and called script name
    argv = argv.slice(2);

    const parsedArgs = {};
    let argName, argValue;

    if (argv.length > 0) {
      this.maybeTask = argv[0];
    }

    argv.forEach(function (arg) {
      // Separate argument for a key/value return
      arg = arg.match(ARGUMENT_SEPARATION_REGEX);
      arg.splice(0, 1);

      // Retrieve the argument name
      argName = arg[0];

      // Remove "--" or "-"
      if (argName.indexOf("-") === 0) {
        argName = argName.slice(argName.slice(0, 2).lastIndexOf("-") + 1);
      }

      // Parse argument value or set it to `true` if empty
      argValue =
        arg[1] !== ""
          ? parseFloat(arg[1]).toString() === arg[1]
            ? +arg[1]
            : arg[1]
          : true;

      parsedArgs[argName] = argValue;
    });

    return parsedArgs;
  }

  async run() {
    const jekyllConfig = await this.parseYaml(this.jekyllConfigPath);
    const manifest = await this.parseJson(this.manifestPath);
    const packageJson = await this.parseJson(this.packageJsonPath);

    for (let key of Object.keys(jekyllConfig)) {
      // apply package.json overrides.
      if (Object.keys(packageJson).indexOf(key) >= 0) {
        jekyllConfig[key] = packageJson[key];
      }
      // apply manifest.json overrides.
      if (Object.keys(manifest).indexOf(key) >= 0) {
        jekyllConfig[key] = manifest[key];
      }
    }

    // Convert to yaml and prepend generated notice
    const updatedJekyllConfig = this.convertJsonToYamlLines(jekyllConfig);
    updatedJekyllConfig.unshift(
      "# The contents of this file are generated. See site_config.yml."
    );
    // Save the yaml config.
    fs.writeFile(
      this.outputConfigPath,
      updatedJekyllConfig.join("\n"),
      (err) => {
        if (err) {
          console.error("error writing file", err);
        } else {
          console.log("Generated " + this.outputConfigPath);
        }
      }
    );

    // Copy README.md to Index.md
    const readme = await fs.readFileSync("README.md", "utf8");
    fs.writeFile("website/index.md", readme, () => {});

    // Copy assets.
    await this.copyDir("assets", "website/assets");
  }

  parseJson(filename) {
    return new Promise((resolve, reject) => {
      let rawdata = fs.readFileSync(filename, "utf-8");
      resolve(JSON.parse(rawdata));
    });
  }

  parseYaml(filename) {
    return new Promise((resolve, reject) => {
      const fileContents = fs.readFileSync(filename, "utf8");
      const lines = fileContents.split("\n");
      resolve(this.convertYamlLinesToJson(lines));
    });
  }

  // Converts YAML lines to a JSON object.
  // Nested YAML lines do not created proper intermediary JSON objects,
  // however, the final YAML output is valid since indentation is preserved in the JSON keys.
  convertYamlLinesToJson(yamlLines) {
    const jsonObject = {};
    for (const l of yamlLines) {
      // If the line is empty or is a comment, skip it.
      let line = l; // Bug: trimming removes indent which is indicates nesting.
      if (line === "" || line.startsWith("#")) {
        continue;
      }
      // If the line contains a comment, remove the comment.
      const [cline, unused] = line.split(" #", 1);
      line = cline;

      // Otherwise, the line is a YAML key-value pair.
      const [key, value] = line.split(":", 2);

      // Add the key and value to the JSON object.
      jsonObject[key] = value;
    }
    return jsonObject;
  }
  convertJsonToYamlLines(obj) {
    const lines = [];
    for (let [key, value] of Object.entries(obj)) {
      let encodedValue = value;
      if (value instanceof Array) {
        encodedValue = `[${value.join(",")}]`;
      } else if (typeof value === "object") {
        let subLines = this.convertJsonToYamlLines(value);
        encodedValue = "\n" + subLines.map((l) => "  " + l).join("\n");
      }

      if (value === undefined) {
        lines.push(key);
      } else {
        lines.push(`${key}: ${encodedValue}`);
      }
    }
    return lines;
  }

  async copyDir(sourceDir, destinationDir) {
    // Copy the directory recursively.
    fs.cp(sourceDir, destinationDir, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(sourceDir + " directory copied successfully!");
      }
    });
  }
}
new ConfigGenerator();
