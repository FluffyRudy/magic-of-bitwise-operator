import { generatePermission } from "./permissionGenerator";

console.log(generatePermission(0)); //---
console.log(generatePermission(1)); //--x
console.log(generatePermission(2)); //-w-
console.log(generatePermission(3)); //-wx
console.log(generatePermission(4)); //r--
console.log(generatePermission(5)); //r-x
console.log(generatePermission(6)); //rw-
console.log(generatePermission(7)); //rwx
