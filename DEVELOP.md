The build creates a new package layout within "dist".
We then publish that package.

```sh
yarn version
yarn build
cd dist
npm publish
git push && git push --tags
```
