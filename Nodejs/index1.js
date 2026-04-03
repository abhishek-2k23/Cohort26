import fs from "fs";

fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log("File reading done")
})

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"), 0);

console.log("Top level code")