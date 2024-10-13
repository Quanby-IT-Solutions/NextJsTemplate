"use client";

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/src/components/ui/chart";
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";


const data = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function Overview() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />

                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />

                <ChartTooltip content={<ChartTooltipContent />} />

                <ChartLegend content={<ChartLegendContent />} />

                <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={[4, 4, 0, 0]}
                />
                <Bar
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ChartContainer>
    );
}
