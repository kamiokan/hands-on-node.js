const cache = {};
function parseJSONAsyncWithCache(json, callback) {
  const cached = cache[json];
  if (cached) {
    callback(cacjed.err, cached.result);
    return;
  }
  parseJSONAsync(json, (err, result) => {
    cache[json] = { err, result };
    callback(err, result);
  });
}

function parseJSONAsync(json, callback) {
  setTimeout(() => {
    try {
      callback(null, JSON.parse(json));
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

// 1回目の実行
parseJSONAsyncWithCache(
  '{"message": "Hello", "to": "World"}',
  (err, result) => {
    console.log("1回目の結果", err, result);
    // コールバックの中で２回目を実行
    parseJSONAsyncWithCache(
      '{"message":"Heloo", "to", "World"}',
      (err, result) => {
        console.log("2回目の結果");
      }
    );
    console.log("2回目の呼び出し完了");
  }
);
console.log("1回目の呼び出し完了");
