// type guard
// in  typeof

type Nemeric = number | string;

const add = (a: Nemeric, b: Nemeric) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};

const result1 = add(12, 12); //24
const result2 = add(2, "2"); // 22;
const result3 = add("2", 2); //22

console.log({ result1, result2, result3 });

// in guard

type NormalUser = {
  name: String;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const user1 = {
  name: "Jamal Hossen",
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} is role ${user.role}`);
  } else {
    console.log(`${user.name} is role is not available`);
  }
};

getUserInfo(user1);
