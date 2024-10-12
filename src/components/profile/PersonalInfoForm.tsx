import { Card, CardContent } from "../card/Card";
import { FormField, FormItem, FormLabel, FormControl } from "../form/Form";
import { Input } from "../input/Input";
import { AvatarUpload } from "./AvatarUpload";

export const PersonalInfoForm: React.FC<{ form: any }> = ({ form }) => {
    return (
        <Card className="w-full p-6">
            <CardContent>
                <div className="flex flex-col md:flex-row gap-10 md:items-start">
                    {/* Left column: Form fields */}
                    <div className="flex flex-col gap-6 w-full max-w-lg">
                        {/* Name Field */}
                        <FormField
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="name" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Username Field */}
                        <FormField
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="username" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Email Field */}
                        <FormField
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="email" type="email" readOnly />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            name="password"
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

                    {/* Right column: Avatar Upload */}
                    <div className="flex flex-col items-center justify-center md:justify-start space-y-4">
                        <AvatarUpload />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
