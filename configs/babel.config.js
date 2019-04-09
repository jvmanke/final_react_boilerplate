const path = require("path")

const standardResolvePath = require("babel-plugin-module-resolver").resolvePath

function resolveHashtag(resolverRoot, sourcePath, currentFile, opts) {
  if (sourcePath[0] === "#") {
    const moduleName = path
      .relative(resolverRoot, currentFile)
      .split(path.sep)[0]
    sourcePath = moduleName + sourcePath.slice(1)
  }
  return [sourcePath, currentFile, opts]
}

module.exports = (rootDir) => ({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    [
      "babel-plugin-module-resolver",
      {
        root: path.join(rootDir, "src"),
        extensions: [".js", ".jsx"],
        resolvePath(sourcePath, currentFile, opts) {
          let [newSourcePath, newCurrentFile, newOpts] = resolveHashtag(
            path.join(rootDir, "src"),
            sourcePath,
            currentFile,
            opts
          )
          return standardResolvePath(newSourcePath, newCurrentFile, newOpts)
        },
      },
    ],
  ],
})
