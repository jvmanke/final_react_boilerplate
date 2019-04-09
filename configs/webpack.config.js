/* eslint-disable global-require */
const path = require("path")

const package = require("../package.json")

module.exports = function selectConfig(env) {
  const rootDir = path.join(__dirname, "..")

  const title = package.title || "myReactApp"
  const name = package.name || "my-react-app"
  const description = package.description || "no description"

  let production = false
  let port = 5000

  if (env) {
    production = env.production || production
    port = env.port || port
  }

  return production
    ? require("./webpack/webpack.config.prod")(
        rootDir,
        title,
        name,
        description
      )
    : require("./webpack/webpack.config.dev")(
        rootDir,
        title,
        name,
        description,
        port
      )
}
