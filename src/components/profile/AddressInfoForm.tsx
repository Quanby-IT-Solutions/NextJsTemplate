import { FormField, FormItem, FormLabel, FormControl } from "../form/Form";
import { Input } from "../input/Input";

export const AddressInfoForm: React.FC<{ form: any }> = ({ form }) => {
    return (
        <div className="flex flex-wrap gap-7 mt-6 w-full">
            <div className="flex flex-col w-full gap-6">
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
        </div>
    );
};
