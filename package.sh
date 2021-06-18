VERSION=$(cat package.json | jq -r .version)

yarn install --pure-lockfile
yarn build

# Sign

mv dist/ walshy-dev-uptime
zip -r "walshy-dev-uptime-$VERSION.zip" walshy-dev-uptime
