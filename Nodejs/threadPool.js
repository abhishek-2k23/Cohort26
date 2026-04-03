import crypto from "crypto"
import fs from "fs"

const start = Date.now()

fs.readFile("sample.txt", "utf-8", (err, data) => {
  console.log("File reading done...")

  crypto.pbkdf2("password1", "salt", 100000, 64, "sha512", () => {
    console.log(`Password1 finished in ${Date.now() - start} ms`)
  })
  crypto.pbkdf2("password2", "salt", 100000, 64, "sha512", () => {
    console.log(`Password2 finished in ${Date.now() - start} ms`)
  })
  crypto.pbkdf2("password3", "salt", 100000, 64, "sha512", () => {
    console.log(`Password3 finished in ${Date.now() - start} ms`)
  })
  crypto.pbkdf2("password4", "salt", 100000, 64, "sha512", () => {
    console.log(`Password4 finished in ${Date.now() - start} ms`)
  })
  crypto.pbkdf2("password5", "salt", 100000, 64, "sha512", () => {
    console.log(`Password5 finished in ${Date.now() - start} ms`)
  })
  crypto.pbkdf2("password6", "salt", 100000, 64, "sha512", () => {
    console.log(`Password6 finished in ${Date.now() - start} ms`)
  })
  //  crypto.pbkdf2("password4", "salt", 100000, 64, "sha512", () => {
  //   console.log(`Password7 finished in ${Date.now() - start} ms`)
  // })
  //  crypto.pbkdf2("password4", "salt", 100000, 64, "sha512", () => {
  //   console.log(`Password8 finished in ${Date.now() - start} ms`)
  // })
})

setTimeout(() => {
    console.log("Timeout")
}, 0);

setImmediate(() => {
    console.log("Immediate")
},0)

console.log("Top Level Code")
