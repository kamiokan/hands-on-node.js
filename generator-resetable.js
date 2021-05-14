// リセット可能なカウンタを実装するジェネレータ関数
function* resetableGeneratorFunc() {
  let count = 0;
  while (true) {
    // next()を真に評価される引数(trueなど)で実行すると、
    // ここでカウンタがリセットされる
    if (yield count++) {
      count = 0;
    }
  }
}
