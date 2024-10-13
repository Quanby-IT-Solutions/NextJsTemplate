
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";

export const AddressInfoForm: React.FC<{ form: any }> = ({ form }) => {
    return (
        <Card className="w-full p-4 md:p-6">
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date of Birth Field */}
                    <FormField
                        name="dob"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                    <Input {...field} id="dob" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Permanent Address Field */}
                    <FormField
                        name="permanentAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Permanent Address</FormLabel>
                                <FormControl>
                                    <Input {...field} id="permanent-address" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Present Address Field */}
                    <FormField
                        name="presentAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Present Address</FormLabel>
                                <FormControl>
                                    <Input {...field} id="present-address" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* City Field */}
                    <FormField
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} id="city" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Postal Code Field */}
                    <FormField
                        name="postalCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Postal Code</FormLabel>
                                <FormControl>
                                    <Input {...field} id="postal-code" readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Country Field */}
                    <FormField
                        name="country"
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
