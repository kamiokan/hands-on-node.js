const { performance } = require("perf_hooks");

// 1秒かかる非同期処理
function asyncFunc() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

// perf_hooks.performance.now()で現在時刻を取得
const start = performance.now();

// 逐次実行
asyncFunc()
  .then(asyncFunc)
  .then(asyncFunc)
  .then(asyncFunc)
  .then(() => console.log("逐次実行所要時間", performance.now() - start));

// Promise.all()で並行実行
Promise.all([asyncFunc(), asyncFunc(), asyncFunc(), asyncFunc()]).then(() =>
  console.log("並行実行所要時間", performance.now() - start)
);
