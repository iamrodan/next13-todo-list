type HeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Header({ title, children }: HeaderProps) {
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">{title}</h1>
        {children}
      </header>
    </div>
  );
}
