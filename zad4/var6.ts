// Вариант 6
interface Entity {
    id: number;
  }
  interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
  }
  const data: ToJsonStringify = {
    id: 6,
    e1: null,
    e2: 28,
  };
  console.log(JSON.stringify(data));