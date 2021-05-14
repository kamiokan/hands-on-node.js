function parseJSONAsync(json, callback) {
  // Promiseインスタンスを生成して返す（この時点ではpending状態）
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        // fulfilled状態にする（解決）
        resolve(JSON.parse(json));
      } catch (err) {
        // rejected状態にする（拒否）
        reject(err);
      }
    }, 1000)
  );
}

const stringPromise = Promise.resolve('{"foo":1}');
const objPromise = stringPromise.then(parseJSONAsync);
console.log(objPromise);
