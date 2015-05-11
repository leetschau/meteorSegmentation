Tinytest.add('splitBasic', function (test) {
  dict = ['今天', '日期'];
  test.equal(Seg.parse("May   7th", dict),  ["May", "7th"]);
});

Tinytest.add('splitChnEng', function (test) {
  dict = ['今天', '日期'];
  test.equal(Seg.parse("今天日期是2015年5月7日May 7th", dict),
    ["2015","5","7","May","7th","今天","日期","是","年","月","日"]);
});

Tinytest.add('splitWithDict', function (test) {
  dict = ['科隆', '五金'];
  test.equal(Seg.parse("科隆五金展", dict),
    ["科隆","五金","展"]);
});

Tinytest.add('splitLongWords', function (test) {
  dict = ['南方周末', '中国', '口号', '这里'];
  test.equal(Seg.parse("在这里读懂中国是南方周末的口号", dict),
    ["科隆","五金","展"]);
});
