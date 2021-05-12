function parseJSONSync(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.log("エラーをキャッチ", err);
  }
}
parseJSONSync("不正なJSON");
