import { randomColor } from "randomcolor";

const todo = [
  {
    title: "Read the book",
    description:
      "I bought a new book. I'll be sure to read it in my spare time.",
    category: "Personal",
    id: 1,
    status: true,
    color: randomColor({
      luminosity: "light",
    }),
  },
  {
    title: "Finish the project.",
    description: "My job needs to be done.",
    category: "Business",
    id: 3,
    status: true,
    color: randomColor({
      luminosity: "light",
    }),
  },
  {
    title: "Learn JavaScript",
    description: "It's time to start exploring new topics.",
    category: "Personal",
    id: 4,
    status: false,
    color: randomColor({
      luminosity: "light",
    }),
  },
];

export default todo;
