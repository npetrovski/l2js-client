const NODE_ONLY_BLOCK = /\/\*\s*nodejs:start\s*\*\/[\s\S]*?\/\*\s*nodejs:end\s*\*\//g;

module.exports = function stripNodeBlocks(source, sourceMap) {
  const strippedSource = source.replace(NODE_ONLY_BLOCK, (block) => block.replace(/[^\r\n]/g, ""));

  this.callback(null, strippedSource, sourceMap);
};
