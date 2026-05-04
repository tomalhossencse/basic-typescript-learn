// spread operator

const friends = ["Rahim", "Karim"];
const schoolFrd = ["Rakib", "Sakib", "Lakib"];
const collegeFrd = ["Chiku", "Banti"];
friends.push(...collegeFrd, ...schoolFrd);
console.log(friends);

const user = {
  name: "Tomal Hossen",
  roll: 123,
  phone: "018244439",
};
const otherInfo = {
  hobby: "cooking",
  like: "cricket",
};

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// rest operator

const sentInvite = (...person: string[]) => {
  person.forEach((p: string) => console.log(`Send Invite to ${p}`));
};

sentInvite("Tomal", "Jamal", "Kamal", "Bangladesh");
