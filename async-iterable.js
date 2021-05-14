const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    //async イテレータ
    return {
      // value,doneプロパティを持つオブジェクトで解決されるPromiseを返す
      next() {
        if (i > 3) {
          return Promise.resolve({ done: true });
        }
        return new Promise((resolve) =>
          setTimeout(() => resolve({ value: i++, done: false }), 100)
        );
      },
    };
  },
};

for await (const element of asyncIterable) {
  console.log(element);
}
