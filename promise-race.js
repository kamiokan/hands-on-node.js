// 引数で与えられた時間だけ待機する非同期処理
function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// 最初にfulfilledになるケース
const fulfilledFirst = Promise.race([
  wait(10).then(() => 1), // この結果が採用される
  wait(30).then(() => "foo"),
  wait(20).then(() => Promise.reject(new Error("エラー"))),
]);

// 最初にrejectedになるケース
const rejectFirst = Promise.race([
  wait(20).then(() => 1),
  wait(30).then(() => "foo"),
  wait(18).then(() => Promise.reject(new Error("エラー"))), // この結果が採用される
]);

// Promiseインスタンス以外の値が含まれるケース
const containsNonPromise = Promise.race([
  wait(10).then(() => 1),
  "foo", // この結果が採用される
  wait(20).then(() => Promise.reject(new Error("エラー"))),
]);

// fulfilledFirst;
// containsNonPromise;
// rejectFirst;
