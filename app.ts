enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  roles: [number, string];
  role: Role;
};

const person: Person = {
  name: "Miek",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  roles: [1, "number"],
  role: Role.AUTHOR,
};
console.log(person);
