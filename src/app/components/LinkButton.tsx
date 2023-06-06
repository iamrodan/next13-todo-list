import Link from "next/link";

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
};

export default function LinkButton({ children, to, ...rest }: LinkButtonProps) {
  return (
    <>
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href={to}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
}
