import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/Avatar";

const users = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=olivia",
        fallback: "OM",
        salesAmount: "+$1,999.00"
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=jackson",
        fallback: "JL",
        salesAmount: "+$39.00"
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=isabella",
        fallback: "IN",
        salesAmount: "+$299.00"
    },
    {
        name: "William Kim",
        email: "will@email.com",
        avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=will",
        fallback: "WK",
        salesAmount: "+$99.00"
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        avatarURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=sofia",
        fallback: "SD",
        salesAmount: "+$39.00"
    },
];

export function RecentSales() {
    return (
        <div className="space-y-8">
            {users.map((user, index) => (
                <div className="flex items-center" key={index}>
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatarURL} alt={`Avatar of ${user.name}`} />
                        <AvatarFallback>{user.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="ml-auto font-medium">{user.salesAmount}</div>
                </div>
            ))}
        </div>
    );
}
