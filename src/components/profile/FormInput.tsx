interface FormInputProps {
  label: string;
  value: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  type = "text",
}) => {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label
        htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        className="self-start text-base text-neutral-800"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s/g, "-")}
        value={value}
        className="px-5 py-4 mt-3 text-base bg-white rounded-2xl border border-solid border-slate-200 text-slate-400"
        readOnly
      />
    </div>
  );
};

export default FormInput;
