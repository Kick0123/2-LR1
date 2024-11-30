// Вариант 2
interface Entity {
    id: number;
  }
  interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
  }
  const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
  };
  console.log(JSON.stringify(data));