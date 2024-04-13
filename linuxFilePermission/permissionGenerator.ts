//permissions
//r=read, w=write, x=execute

function generatePermissionString(n: number) {
  switch (n) {
    case 4:
      return "r";
    case 2:
      return "w";
    case 1:
      return "x";
    default:
      return "-";
  }
}
export function generatepermission(n: number) {
  let permission = "";

  permission += generatePermissionString(n & 4); //for read
  permission += generatePermissionString(n & 2); // for write
  permission += generatePermissionString(n & 1); // for execute

  return permission;
}
