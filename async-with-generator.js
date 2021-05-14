// 非同期的にJSONをパースする関数
function parseJSONAsync(json) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        resolve(JSON.parse(json));
      } catch (err) {
        reject(err);
      }
    }, 1000)
  );
}

// yieldの仕組みを利用して非同期処理を実行する関数
function* asyncWithGeneratorFunc(json) {
  try {
    // 非同期処理の実行
    const result = yield parseJSONAsync(json);
    console.log("パース結果", result);
  } catch (err) {
    console.log("エラーをキャッチ", err);
  }
}
