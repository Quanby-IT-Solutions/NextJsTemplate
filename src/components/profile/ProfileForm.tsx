"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { AddressInfoForm } from "./AddressInfoForm";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// Personal Info Schema
const personalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Address Info Schema
const addressInfoSchema = z.object({
  dob: z.string(),
  permanentAddress: z.string(),
  presentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

const ProfileForm: React.FC = () => {
  // Separate useForm for Personal Info
  const personalInfoForm = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "Joemar Jane",
      username: "Joemar Jane",
      email: "joemar@email.com",
      password: "**********",
    },
  });

  // Separate useForm for Address Info
  const addressInfoForm = useForm({
    resolver: zodResolver(addressInfoSchema),
    defaultValues: {
      dob: "25 December 1969",
      permanentAddress: "San Andreas, Grand Theft Auto, USA",
      presentAddress: "San Andreas, Grand Theft Auto, USA",
      city: "San Andreas",
      postalCode: "4508",
      country: "Grand Theft Auto",
    },
  });

  return (
    <Tabs defaultValue="personal-info" className="mt-4 space-y-4">
      <TabsList>
        <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
        <TabsTrigger value="address-info">Address Info</TabsTrigger>
      </TabsList>

      {/* Personal Info Form */}
      <TabsContent value="personal-info">
        <Form {...personalInfoForm}>
          <PersonalInfoForm form={personalInfoForm} />
          <div className="mt-8 flex justify-end">
            <Button type="submit" className="w-[190px] max-md:w-full">
              Save Personal Info
            </Button>
          </div>
        </Form>
      </TabsContent>

      {/* Address Info Form */}
      <TabsContent value="address-info">
        <Form {...addressInfoForm}>
          <AddressInfoForm form={addressInfoForm} />
          <div className="mt-8 flex justify-end">
            <Button type="submit" className="w-[190px] max-md:w-full">
              Save Address Info
            </Button>
          </div>
        </Form>
      </TabsContent>
    </Tabs>
  );
};

export default ProfileForm;
