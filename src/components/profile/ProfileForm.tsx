import { useForm } from "react-hook-form";
import { AvatarUpload } from "./AvatarUpload";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { AddressInfoForm } from "./AddressInfoForm";
import { Button } from "../button/Button";
import { Form } from "../form/Form";

const ProfileForm: React.FC = () => {
  const form = useForm({
    defaultValues: {
      name: "Joema Jane",
      username: "Joemar Jane",
      email: "joemar@email.com",
      password: "**********",
      dob: "25 December 1969",
      permanentAddress: "San Andreas, Grand Theft Auto, USA",
      presentAddress: "San Andreas, Grand Theft Auto, USA",
      city: "San Andreas",
      postalCode: "4508",
      country: "Grand Theft Auto",
    },
  });

  return (
    <Form {...form}>
      <div className="flex flex-wrap gap-10 mt-14 max-md:mt-10">
        <AvatarUpload />
        <div className="flex flex-col grow max-w-full">
          <PersonalInfoForm form={form} />
          <AddressInfoForm form={form} />
          <Button
            type="submit"
            className="self-end mt-8 w-[190px] px-16 py-3.5 text-lg font-medium text-white bg-blue-700 max-md:w-full"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ProfileForm;
