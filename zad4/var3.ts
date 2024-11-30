// Вариант 3
interface Entity {
    id: number;
  }
  interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
  }
  const data: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
  };
  console.log(JSON.stringify(data));