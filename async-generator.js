async function* asyncGenerator() {
  let i = 0;
  while (i <= 3) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    yield i++;
  }
}

for await (const element of asyncIterable) {
  console.log(element);
}
