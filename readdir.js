const fs = require("fs");
fs.readdir("foo", (err, files) => {
  console.log("fs.readdir()実行結果");
  console.log("err", err);
  console.log("files", files);
});
