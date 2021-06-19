VERSION=$(cat package.json | jq -r .version)

# Cleanup previous runs
rm -rf dist walshydev-uptime-panel*

# Build
yarn install --pure-lockfile
yarn build

# Sign
#npx @grafana/toolkit plugin:sign

# Package
mv dist/ walshydev-uptime-panel
zip -r "walshydev-uptime-panel-$VERSION.zip" walshydev-uptime-panel
