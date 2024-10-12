"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AvatarUpload } from "./AvatarUpload"
import { PersonalInfoForm } from "./PersonalInfoForm"
import { AddressInfoForm } from "./AddressInfoForm"
import { Button } from "../button/Button"
import { Form } from "../form/Form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs/Tabs"

// Form validation schema using zod
const profileFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dob: z.string(),
  permanentAddress: z.string(),
  presentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
})

const ProfileForm: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Joemar Jane",
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
      <Tabs defaultValue="personal-info" className="mt-4 space-y-4">
        <TabsList>
          <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
          <TabsTrigger value="address-info">Address Info</TabsTrigger>
        </TabsList>

        <TabsContent value="personal-info">
          <PersonalInfoForm form={form} />
        </TabsContent>

        <TabsContent value="address-info">
          <AddressInfoForm form={form} />
        </TabsContent>

        <div className="mt-8 flex justify-end">
          <Button type="submit" className="w-[190px] max-md:w-full">
            Save
          </Button>
        </div>
      </Tabs>
    </Form>
  );
};

export default ProfileForm;
