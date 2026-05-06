"use strict";
// enum => set of fixed string literal stored in one place
// type UserRole = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
  UserRoles["Admin"] = "Admin";
  UserRoles["Editor"] = "Editor";
  UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};
const isEditPermisable = canEdit(UserRoles.Admin);
console.log({ isEditPermisable });
