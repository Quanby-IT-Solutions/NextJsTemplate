import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const ProfileForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8bf46326945fcb47234c4ce5c60c741b201a342844dfd775852cd26abfba99?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
          alt="Profile"
          className="object-contain shrink-0 self-start max-w-full aspect-[1.02] w-[132px]"
        />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-w-full text-base text-neutral-800 w-[532px]">
            <FormInput label="Your Name" value="Charlene Reed" />
            <FormInput label="User Name" value="Charlene Reed" />
          </div>
          <div className="flex flex-wrap gap-7 mt-6 max-md:max-w-full">
            <FormInput label="Email" value="charlenereed@gmail.com" />
            <FormInput label="Password" value="**********" type="password" />
          </div>
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <FormSelect label="Date of Birth" value="25 January 1990" />
                <FormInput
                  label="Permanent Address"
                  value="San Jose, California, USA"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <FormInput
                  label="Present Address"
                  value="San Jose, California, USA"
                />
                <FormInput label="City" value="San Jose" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-7 mt-6 max-md:max-w-full">
            <FormInput label="Postal Code" value="45962" />
            <FormInput label="Country" value="USA" />
          </div>
          <button
            type="submit"
            className="self-end px-16 py-3.5 mt-8 max-w-full text-lg font-medium text-center text-white whitespace-nowrap bg-blue-700 rounded-2xl w-[190px] max-md:px-5"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
