function* tryCatchGeneratorFunc() {
  try {
    yield 1;
  } catch (err) {
    console.log("エラーをキャッチ", err);
    yield 2;
  }
}
