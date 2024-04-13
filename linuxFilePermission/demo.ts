import { generatepermission } from "./permissionGenerator";

console.log(generatepermission(0)); //---
console.log(generatepermission(1)); //--x
console.log(generatepermission(2)); //-w-
console.log(generatepermission(3)); //-wx
console.log(generatepermission(4)); //r--
console.log(generatepermission(5)); //r-x
console.log(generatepermission(6)); //rw-
console.log(generatepermission(7)); //rwx
