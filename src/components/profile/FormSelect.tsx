interface FormSelectProps {
  label: string;
  value: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col w-full text-base text-neutral-800 max-md:mt-7">
      <label
        htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        className="self-start"
      >
        {label}
      </label>
      <div className="flex gap-5 justify-between px-6 py-4 mt-3 text-base bg-white rounded-2xl border border-solid border-slate-200 text-slate-400 max-md:pr-5">
        <select
          id={label.toLowerCase().replace(/\s/g, "-")}
          value={value}
          className="bg-transparent border-none outline-none appearance-none"
        >
          <option value={value}>{value}</option>
        </select>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d224fec9d252777656d68fd06e3d2ac44b6719d29dc65619bf3bd7825630f7a?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
          alt=""
          className="object-contain shrink-0 my-auto w-3.5 aspect-[1.75]"
        />
      </div>
    </div>
  );
};

export default FormSelect;
