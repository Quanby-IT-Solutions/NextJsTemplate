import React from 'react';
import { usePathname } from 'next/navigation';
import { UserGreeting } from "@/src/components/user-greeting/UserGreeting";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/src/components/ui/breadcrumb';

interface DashboardHeaderProps {
    title: string;
    showBreadcrumbs?: boolean;
    showGreeting?: boolean;
    userName?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
    title,
    showBreadcrumbs = true,
    showGreeting = false,
    userName
}) => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment !== '');

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return {
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            href: href
        };
    });

    return (
        <div className="flex flex-col space-y-4">
            {showBreadcrumbs && (
                <div className="flex justify-between items-center">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem>
                                        {index < breadcrumbs.length - 1 ? (
                                            <BreadcrumbLink href={item.href}>
                                                {item.label}
                                            </BreadcrumbLink>
                                        ) : (
                                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumbs.length - 1 && (
                                        <BreadcrumbSeparator />
                                    )}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            )}
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                {showGreeting && userName && (
                    <UserGreeting user={userName} />
                )}
            </div>
        </div>
    );
};

export default DashboardHeader;