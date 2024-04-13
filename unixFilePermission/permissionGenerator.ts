//permissions
//r=read, w=write, x=execute

const badPermissionError = new Error(
  "invalid permission number, permission integer exist from (0 to 7)"
);
badPermissionError.name = "badPermissionError";

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
export function generatePermission(n: number) {
  if (n > 7 || n < 0 || !Number.isInteger(n)) {
    throw badPermissionError;
  }

  let permission = "";

  permission += generatePermissionString(n & 4); //for read
  permission += generatePermissionString(n & 2); // for write
  permission += generatePermissionString(n & 1); // for execute

  return permission;
}
