// const createArraywithString = (value: string) => [value];
// const createArraywithNumber = (value: number) => [value];
// const createArrayWithObj = (value: { id: number; name: string }) => [value];

// generic Function
const createArrayWithGeneric = <T>(value: T) => [value];

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
  id: 100,
  name: "Jamal Hossen",
});

// tuple

const createArraywithTuple = (value1: string, value2: string) => [
  value1,
  value2,
];

const createArrayTupleWithGeneric = <X, Y>(value1: X, value2: Y) => [
  value1,
  value2,
];

const addStudentToSchool = <T>(studenInfo: T) => {
  return {
    courseName: "Next Level",
    ...studenInfo,
  };
};

const student1 = {
  name: "Abdur Rahman",
  Roll: "4001",
  Department: "Computer",
  isAdmitted: true,
};

const tuple = createArrayTupleWithGeneric("Tomal", "20");
const s1 = addStudentToSchool(student1);
console.log({ arrString, arrNumber, arrObj, s1 });
