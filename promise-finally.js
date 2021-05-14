Promise.resolve("foo")
  .finally(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          console.log("finally()で1秒経過");
          resolve();
        }, 1000)
      )
  )
  .then(console.log);
