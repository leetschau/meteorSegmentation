Seg = {
  parse: function(inp, dict) {
    // split by english, number and Chinese parts
    var rawParts = inp.split(/\b/);
    var parts = _.filter(rawParts, function(part) { return part.trim(); });

    // put Chinese words and English words into different lists
    var nonChn = _.filter(parts, function(part){ return /^\w+$/.test(part); });
    var chnParts = _.filter(parts, function(part){ return /^\W+$/.test(part); });

    var findWords = function(inp){
      // divide a Chinese character list into several words according to the "dict" parameter
      if (inp.length < 2) { return inp; }
      var possibleWords = dict[inp[0]];
      if (!possibleWords) { return [inp[0]].concat(findWords(inp.slice(1))); }
      var matchWord = _.find(possibleWords, function(word){ return inp.indexOf(word) === 0; });
      if (!matchWord) { return [inp[0]].concat(findWords(inp.slice(1))); }
      var matchLen = matchWord.length;
      return [inp.slice(0, matchLen)].concat(findWords(inp.slice(matchLen)));
    };

    var chnWords = _.chain(chnParts)
      .map(function(inp) { return findWords(inp); })
      .flatten().value()
      .filter(function(inp){ return inp.trim(); });
    return nonChn.concat(chnWords);
  }
};
