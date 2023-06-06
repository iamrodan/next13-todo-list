import Link from "next/link";
import LinkButton from "./components/LinkButton";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos</h1>
        <LinkButton to="/new">New</LinkButton>
      </header>
      <ul></ul>
    </>
  );
}
