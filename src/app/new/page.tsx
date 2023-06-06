import Button from "../components/Button";
import InputField from "../components/InputField";
import LinkButton from "../components/LinkButton";
import Header from "../components/Header";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default async function Page() {
  return (
    <>
      <Header title="New" />
      <form className="flex gap-2 flex-col" action={createTodo}>
        <InputField inputType="text" name="title" />
        <div className="flex gap-1 justify-end">
          <LinkButton to="/">Cancel</LinkButton>
          <Button buttonType="submit">Create</Button>
        </div>
      </form>
    </>
  );
}
