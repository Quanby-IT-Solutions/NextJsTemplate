import { Card, CardHeader, CardContent, CardTitle } from "@/src/components/card/Card";
import { Button } from "@/src/components/button/Button";
import { LucidePrinter } from "lucide-react";

const Reports = () => {
    // Dummy print handler
    const handlePrint = () => {
        console.log("Printing reports...");
    };

    return (
        <div className="space-y-6">
            {/* Main Report Card with adjusted Print Button */}
            <Card className="w-full">
                <CardHeader className="space-y-4">
                    <CardTitle className="text-left">Reports Overview</CardTitle>
                    <div className="flex justify-start">
                        <Button
                            onClick={handlePrint}
                            variant="default"
                            className="flex items-center gap-2 self-start w-auto"
                        >
                            <LucidePrinter className="h-4 w-4" />
                            Print Reports
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-left">
                        This section contains reports and insights. You can print or export these reports for further use.
                    </p>
                </CardContent>
            </Card>

            {/* Report Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Monthly Performance */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-left">Monthly Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-left">
                            A breakdown of monthly performance, including revenue, user engagement, and overall growth trends.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-2 text-left">
                            <li>Revenue: $12,000</li>
                            <li>User Growth: 8%</li>
                            <li>Engagement: 3,500 hours</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Annual Summary */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-left">Annual Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-left">
                            The year’s summary, including financial data, performance indicators, and comparisons to previous years.
                        </p>
                        <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-2 text-left">
                            <li>Total Revenue: $120,000</li>
                            <li>Year-over-Year Growth: 12%</li>
                            <li>User Engagement: 40,000 hours</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Custom Reports */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-left">Custom Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-left">
                            Create custom reports based on specific filters like date ranges, user demographics, and activities.
                        </p>
                        <Button onClick={() => alert("Generating Custom Report")} className="mt-4">
                            Generate Custom Report
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Reports;
