import Image from "next/image";
import { Button } from "../button/Button";

export const AvatarUpload: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                loading="lazy"
                src="/img/mar-logo.png"
                alt="Profile"
                className="object-cover rounded-full"
                width={150}
                height={150}
            />
            <Button className="mt-2 px-3 py-1 bg-blue-600 text-white">
                Edit Avatar
            </Button>
        </div>
    );
};
