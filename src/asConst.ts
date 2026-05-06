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
} as const;

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
2. keyof operator

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


'ADMIN' | "EDITOR" | 'VIEWER


UserRoles['Admin'] >>> 'ADMIN'

typeof UserRoles[keyof typeof UserRoles]



 */

// const canEdit = (role: keyof typeof UserRoles) => {
//   if (role === UserRoles.Admin || role === UserRoles.Editor) {
//     return true;
//   } else return false;
// };

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermisable = canEdit(UserRoles.Viewer);
console.log({ isEditPermisable });
