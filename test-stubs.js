var data = ['科隆', '南方', '口号', '周末', '五金', '南方周末', '科学技术', '这里', '今天', '科技', '五金书', '日期', '日期时间', '中国货', '中国'];
var mkDict = function(inp) {
  sortDict = _.sortBy(inp, function(word){ return -1 * word.length; });
  return _.groupBy(sortDict, function(word){ return word[0]; });
};
Dict = mkDict(data);
