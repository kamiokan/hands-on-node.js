const allSettled = Promise.allSettled([
  1,
  Promise.resolve("foo"),
  Promise.reject(new Error("エラー")),
  Promise.resolve(true),
]);

console.log(allSettled);
