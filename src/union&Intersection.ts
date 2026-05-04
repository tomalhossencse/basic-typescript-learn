// union |
type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

const myDashboard = getDashboard("admin");
console.log(myDashboard);

// intersection &

type Employee = {
  name: string;
  id: number;
  phone: string;
};

type Manerger = {
  designation: string;
  teamSize: number;
};

type EmployeeManeger = Employee & Manerger;

const rahimInfo: EmployeeManeger = {
  id: 123,
  name: "Rahim Hossen",
  phone: "214982348234",
  teamSize: 12,
  designation: "Web Developer",
};

console.log(rahimInfo);
