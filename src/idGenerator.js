import { v4 as uuidv4 } from "uuid";

export default function idGenerator(user) {
  return { ...user, id: uuidv4() };
}
