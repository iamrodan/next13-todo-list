type InputButtonProps = {
  buttonType: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  [key: string]: any;
};

export default function Button({
  buttonType,
  children,
  ...rest
}: InputButtonProps) {
  return (
    <button
      type={buttonType}
      {...rest}
      className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
    >
      {children}
    </button>
  );
}
