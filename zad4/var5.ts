// Вариант 5
interface Entity {
    id: number;
  }
  interface ToJsonStringify extends Entity {
    e1: number;
    e2: number;
  }
  const data: ToJsonStringify = {
    id: 5,
    e1: 12345,
    e2: 999,
  };
  console.log(JSON.stringify(data));