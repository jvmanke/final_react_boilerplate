/* eslint-disable global-require, import/no-extraneous-dependencies */
const path = require("path")

const packageJSON = require("../package.json")

module.exports = function selectConfig(env) {
  const rootDir = path.join(__dirname, "..")

  const title = packageJSON.title || "myReactApp"
  const name = packageJSON.name || "my-react-app"
  const description = packageJSON.description || "no description"

  let production = false
  let port = 5000

  if (env) {
    production = env.prod || production
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
