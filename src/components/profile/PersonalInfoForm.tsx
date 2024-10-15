import { Card, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";

// Define the structure of your form values for personal info
interface PersonalInfoFormValues {
    name: string;
    username: string;
    email: string;
    password: string;
}

interface PersonalInfoFormProps {
    form: UseFormReturn<PersonalInfoFormValues>;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ form }) => {
    return (
        <Card className="w-full p-6">
            <CardContent>
                <div className="flex flex-col md:flex-row gap-10 md:items-start">
                    {/* Left column: Form fields */}
                    <div className="flex flex-col gap-6 w-full max-w-lg">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="name" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="username"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="username" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="email" type="email" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="password" type="password" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
