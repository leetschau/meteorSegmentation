Tinytest.add('splitBasic', function (test) {
  test.equal(Seg.parse("May   7th", Dict),  ["May", "7th"]);
});

Tinytest.add('splitChnEng', function (test) {
  test.equal(Seg.parse("今天日期是2015年5月7日May 7th", Dict),
    ["2015","5","7","May","7th","今天","日期","是","年","月","日"]);
});

Tinytest.add('splitWithDict', function (test) {
  test.equal(Seg.parse("科隆五金展", Dict),
    ["科隆","五金","展"]);
});

Tinytest.add('splitLongWords', function (test) {
  test.equal(Seg.parse("在这里读懂中国是南方周末的口号", Dict),
    ["在","这里","读","懂","中国","是","南方周末","的","口号"]);
});
