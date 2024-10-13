import { Button } from "@/src/components/button/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/card/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/Avatar";
import { LucideBell, LucideMessageCircle, LucideAlertTriangle, LucideCalendar } from "lucide-react";

const Notifications = () => {
    // Dummy function to simulate clearing notifications
    const clearNotifications = () => {
        console.log("Clearing notifications...");
    };

    return (
        <div className="space-y-6">
            {/* Notifications List */}
            <Card className="w-full">
                <CardHeader className="space-y-4">
                    <CardTitle className="text-left">Notifications</CardTitle>
                    <div className="flex justify-start">
                        <Button
                            onClick={clearNotifications}
                            variant="default"
                            className="flex items-center gap-2 self-start w-auto"
                        >
                            <LucideBell className="h-4 w-4" />
                            Clear All
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {/* Notification: New Message */}
                        <li className="flex items-center justify-between pb-4">
                            <div className="flex items-center gap-4">
                                {/* User Avatar */}
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/img/company.png" alt="John Doe" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <p className="font-medium">
                                        John Doe <span className="font-normal text-muted-foreground">sent you a message.</span>
                                    </p>
                                    <span className="text-xs text-muted-foreground">2 minutes ago</span>
                                </div>
                            </div>
                        </li>

                        {/* Notification: System Alert */}
                        <li className="flex items-center justify-between pb-4">
                            <div className="flex items-center gap-4">
                                {/* Alert Icon */}
                                <LucideAlertTriangle className="h-5 w-5 text-destructive" />
                                <div className="text-sm">
                                    <p className="font-medium">
                                        System Alert <span className="font-normal text-muted-foreground">Scheduled maintenance at midnight.</span>
                                    </p>
                                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                                </div>
                            </div>
                        </li>

                        {/* Notification: Reminder */}
                        <li className="flex items-center justify-between pb-4">
                            <div className="flex items-center gap-4">
                                {/* Reminder Icon */}
                                <LucideCalendar className="h-5 w-5 text-success" />
                                <div className="text-sm">
                                    <p className="font-medium">
                                        Reminder <span className="font-normal text-muted-foreground">Team meeting tomorrow at 10 AM.</span>
                                    </p>
                                    <span className="text-xs text-muted-foreground">5 hours ago</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>

        </div>
    );
};

export default Notifications;
