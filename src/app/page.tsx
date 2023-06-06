import LinkButton from "./components/LinkButton";
import { prisma } from "@/db";
import TodoItem from "./components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos</h1>
        <LinkButton to="/new">New</LinkButton>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
