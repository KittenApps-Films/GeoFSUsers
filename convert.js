console.log("users installer running")
import { users } from "/GeoFS_Wiki/GeoFSUsers.js"
import { update } from "./add.js"
import { getContents } from "./getter.js"
globalThis.users = users
globalThis.update = update
globalThis.update = getContents
console.log("users installed")
