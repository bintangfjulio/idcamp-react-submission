import { v4 as uuidv4 } from "uuid";

const getDatas = () => {
  return [
    {
      uuid: uuidv4(),
      archived: false,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: new Date().toLocaleDateString("en-GB"),
    },
    {
      uuid: uuidv4(),
      archived: false,
      title: "React",
      body: "React adalah library JavaScript untuk buat UI. React merupakan library open-source yang berasal dari Facebook.",
      createdAt: new Date().toLocaleDateString("en-GB"),
    },
  ];
};

export { getDatas };
