# Remove and re-initializing git repository.
rm -rf .git
git init

# Rename title and description everywhere.
sed -i '' 's/Floating Calculator/New Name/g' ./*
sed -i '' 's/Browser extension example. Typescript, E2E tests, icon generation, automatic i18n and ESBuild/New Description/g' ./*