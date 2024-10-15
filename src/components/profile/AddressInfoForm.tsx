import { Card, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";

// Define the structure of your form values for address info
interface AddressInfoFormValues {
    dob: string;
    permanentAddress: string;
    presentAddress: string;
    city: string;
    postalCode: string;
    country: string;
}

interface AddressInfoFormProps {
    form: UseFormReturn<AddressInfoFormValues>;
}

export const AddressInfoForm: React.FC<AddressInfoFormProps> = ({ form }) => {
    return (
        <Card className="w-full p-6">
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        name="dob"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                    <Input {...field} id="dob" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="permanentAddress"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Permanent Address</FormLabel>
                                <FormControl>
                                    <Input {...field} id="permanent-address" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="presentAddress"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Present Address</FormLabel>
                                <FormControl>
                                    <Input {...field} id="present-address" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="city"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} id="city" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="postalCode"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Postal Code</FormLabel>
                                <FormControl>
                                    <Input {...field} id="postal-code" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="country"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input {...field} id="country" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </CardContent>
        </Card>
    );
};
