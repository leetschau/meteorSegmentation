// Write your tests here!
// Here is an example.
Tinytest.add('splitBasic', function (test) {
  test.equal(Seg.parse("May   7th"),  ["May", "7th"]);
});

Tinytest.add('splitChnEng', function (test) {
  test.equal(Seg.parse("今天是2015年5月7日May 7th日期"),
    ["今天是","2015","年","5","月","7","日","May","7th","日期"]);
});
