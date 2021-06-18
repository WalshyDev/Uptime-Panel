VERSION=$(cat package.json | jq -r .version)

yarn install --pure-lockfile
yarn build

#npx @grafana/toolkit plugin:sign

mv dist/ walshydev-uptime
zip -r "walshydev-uptime-$VERSION.zip" walshydev-uptime
