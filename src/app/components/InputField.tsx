type InputFieldProps = {
  inputType: string;
  [key: string]: any;
};

export default function InputField({
  inputType,
  children,
  ...rest
}: InputFieldProps) {
  return (
    <input
      type={inputType}
      {...rest}
      className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
    />
  );
}
