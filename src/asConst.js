"use strict";
// as const assertion
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
};
/**
 *
 * behind the scenee when use as const
  const UserRoles = {
readonly  Admin: "Admin",
readonly  Editor: "Editor",
readonly  Viewer: "Viewer",
}


we need two thing use it like type of
1. typeof operator

behind the scence =>

const user = {
id : '22',
name : 'Robin Islam'
}

type user = {
id : number;
name : string;
}


typeof UserRoles

{
 Admin: "Admin",
 Editor: "Editor",
 Viewer: "Viewer",
}
 
keyof typeof UserRoles
'Admin' | 'Editer' | 'Viewer'


{
 Admin: "ADMIN",
 Editor: "EDITOR",
 Viewer: "VIEWER",
}




'ADMIN' | "EDITOR" | 'VIEWER


UserRoles['Admin'] >>> 'ADMIN'

typeof UserRoles[keyof typeof UserRoles]







2. keyof operator
 */
const canEdit = (role) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};
const isEditPermisable = canEdit(UserRoles.Viewer);
console.log({ isEditPermisable });
