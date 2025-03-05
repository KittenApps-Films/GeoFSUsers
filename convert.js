console.log("users installer running")
import { users } from "/GeoFS_Wiki/GeoFSUsers.js"
//import { update } from "./add.js"
import { one } from "./add.js"
globalThis.users = users
//globalThis.update = update
console.log(one)
console.log(one())
globalThis.one = one
console.log("users installed")
