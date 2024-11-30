// Вариант 4
interface Entity {
    id: number;
  }
  interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
  }
  const data: ToJsonStringify = {
    id: 4,
    e1: null,
    e2: null,
  };
  console.log(JSON.stringify(data));