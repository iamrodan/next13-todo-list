import LinkButton from "./components/LinkButton";
import { prisma } from "@/db";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <Header title="Todos">
        <LinkButton to="/new">New</LinkButton>
      </Header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
