type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/*
MyPickは任意の型Tと、Tのプロパティ名を組み合わせたユニオン型のK型
MyPickの型定義において、プロパティ名はK型のいずれかと、T型のそのプロパティの型をプロパティにもつ

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 無理やりTodoで展開
type MyPick<Todo, "title" | "description" | "completed"> = {
  title?: string;
  description?: string;
  completed?: boolean;
};

// https://github.com/type-challenges/type-challenges/issues/13427
interface UserInfo {
  name: string;
  age: number;
}

type keys = keyof UserInfo;
// keys = "name" | "age";

type props = "firstName" | "lastName";
type Name = {
  [key in props]: string;
}
// type Name = { firstName: string, lastName: string };

const getValue = (o: object, key: string) => string | number {
  return o[key];
}
const obj1 = {name: 'Spam', age: 18};
const name = getValue(obj1, "name");
// "Spam"
const age = getValue(obj1, "age")
// 18

// getValue関数の型を汎化
type getValueFunc<T, K extends keyof T> = (o: T, key: K) => T[K]
*/
