import { v4 as uuidv4 } from "uuid";

const getDatas = () => {
  return [
    {
      uuid: uuidv4(),
      name: "Fundamental Flutter",
      path: "Multiplatform",
    },
    {
      uuid: uuidv4(),
      name: "Belajar dasar python",
      path: "Machine Learning",
    },
  ];
};

export { getDatas };
