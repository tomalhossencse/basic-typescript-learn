// constraint : strict rules

type student = {
  name: string;
  roll: number;
  dateOfBirth: string;
};
const addStudentToSchool = <T extends student>(studenInfo: T) => {
  return {
    courseName: "Next Level",
    ...studenInfo,
  };
};

const student1 = {
  name: "Abdur Rahman",
  roll: 4001,
  Department: "Computer",
  isAdmitted: true,
  dateOfBirth: "12/05/2012",
};

const student2 = {
  isAdmitted: true,
  name: "Kamal",
  roll: 2001,
  dateOfBirth: "12/03/2010",
};

const s1 = addStudentToSchool(student1);
const s2 = addStudentToSchool(student2);
console.log({ s1, s2 });
