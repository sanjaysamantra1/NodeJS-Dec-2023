const fs = require("fs");

fs.rename("./contents/file2.txt", "./contents/file_2.txt", function (err) {
  if (err) {
    console.log("No File Present to Rename");
  }else{
      console.log("Rename done");
  }
});
