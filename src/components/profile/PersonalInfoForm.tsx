import { FormField, FormItem, FormLabel, FormControl } from "../form/Form";
import { Input } from "../input/Input";

export const PersonalInfoForm: React.FC<{ form: any }> = ({ form }) => {
    return (
        <div className="flex flex-wrap gap-5 text-base w-full max-w-[532px]">
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
    );
};
