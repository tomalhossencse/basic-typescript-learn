// enum => set of fixed string literal stored in one place

// type UserRole = "Admin" | "Editor" | "Viewer";

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermisable = canEdit(UserRoles.Admin);
console.log({ isEditPermisable });
