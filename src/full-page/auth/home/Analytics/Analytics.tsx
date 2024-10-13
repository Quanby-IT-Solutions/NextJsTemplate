import React from 'react';
import { Bar, BarChart, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Cat, Dog, Bird, Rabbit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/card/Card';
import { ChartConfig, MonthlyData } from '@/src/utils/interfaces/animals_analytics';

// Helper function to generate random data for different animals
const generateRandomData = (): MonthlyData[] => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    return months.map((month) => ({
        month,
        cat: {
            sleeping: Math.floor(Math.random() * 100) + 100,
            eating: Math.floor(Math.random() * 80) + 60,
            playing: Math.floor(Math.random() * 60) + 30,
            grooming: Math.floor(Math.random() * 50) + 20,
            running: Math.floor(Math.random() * 30) + 10
        },
        dog: {
            sleeping: Math.floor(Math.random() * 100) + 90,
            eating: Math.floor(Math.random() * 70) + 50,
            playing: Math.floor(Math.random() * 80) + 40,
            grooming: Math.floor(Math.random() * 60) + 30,
            running: Math.floor(Math.random() * 40) + 20
        },
        bird: {
            sleeping: Math.floor(Math.random() * 50) + 50,
            eating: Math.floor(Math.random() * 40) + 20,
            playing: Math.floor(Math.random() * 30) + 15,
            grooming: Math.floor(Math.random() * 20) + 10,
            flying: Math.floor(Math.random() * 60) + 30
        },
        rabbit: {
            sleeping: Math.floor(Math.random() * 100) + 80,
            eating: Math.floor(Math.random() * 60) + 40,
            playing: Math.floor(Math.random() * 50) + 25,
            grooming: Math.floor(Math.random() * 30) + 15,
            running: Math.floor(Math.random() * 20) + 10
        }
    }));
};

const chartData = generateRandomData();

// Updated chartConfig with improved color scheme
const chartConfig: ChartConfig = {
    cat: {
        label: { label: "Cat", icon: Cat },
        color: "#8E44AD",
    },
    dog: {
        label: { label: "Dog", icon: Dog },
        color: "#2980B9",
    },
    bird: {
        label: { label: "Bird", icon: Bird },
        color: "#16A085",
    },
    rabbit: {
        label: { label: "Rabbit", icon: Rabbit },
        color: "#E67E22",
    },
};

const Analytics: React.FC = () => {
    // Calculate total eating hours for pie chart
    const totalEatingHours = chartData.reduce((acc, data) => {
        return {
            cat: acc.cat + data.cat.eating,
            dog: acc.dog + data.dog.eating,
            bird: acc.bird + data.bird.eating,
            rabbit: acc.rabbit + data.rabbit.eating,
        };
    }, { cat: 0, dog: 0, bird: 0, rabbit: 0 });

    const pieChartData = Object.entries(totalEatingHours).map(([animal, value]) => ({
        name: chartConfig[animal as keyof ChartConfig].label.label,
        value,
        color: chartConfig[animal as keyof ChartConfig].color,
    }));

    return (
        <div className="space-y-6">
            {/* Main Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Animal Activity Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Animal activities throughout the first half of the year.
                    </p>
                </CardContent>
            </Card>

            {/* Activity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(Object.entries(chartConfig) as [keyof ChartConfig, ChartConfig[keyof ChartConfig]][]).map(([animalKey, config]) => (
                    <Card key={animalKey} className="w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                {config.label.icon && <config.label.icon className="h-5 w-5" />}
                                {config.label.label} Activities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis tickFormatter={(value) => `${value}h`} />
                                        <Tooltip />
                                        <Legend />
                                        {['sleeping', 'eating', 'playing', 'grooming', animalKey === 'bird' ? 'flying' : 'running'].map((activity, index) => (
                                            <Bar
                                                key={activity}
                                                dataKey={`${animalKey}.${activity}`}
                                                fill={`${config.color}${(index + 1) * 20}`}
                                                radius={[4, 4, 0, 0]}
                                                name={activity.charAt(0).toUpperCase() + activity.slice(1)}
                                            />
                                        ))}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Additional Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Line Chart for Sleeping and Eating over Time */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Activity Trends (Sleeping vs Eating)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis tickFormatter={(value) => `${value}h`} />
                                    <Tooltip />
                                    <Legend />
                                    {(Object.entries(chartConfig) as [keyof ChartConfig, ChartConfig[keyof ChartConfig]][]).map(([animalKey, config]) => (
                                        <React.Fragment key={animalKey}>
                                            <Line
                                                type="monotone"
                                                dataKey={`${animalKey}.sleeping`}
                                                stroke={config.color}
                                                strokeWidth={2}
                                                name={`${config.label.label} Sleeping`}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey={`${animalKey}.eating`}
                                                stroke={`${config.color}80`}
                                                strokeWidth={2}
                                                name={`${config.label.label} Eating`}
                                            />
                                        </React.Fragment>
                                    ))}
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Area Chart for Activity Distribution */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Activity Distribution (Sleeping vs Playing)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis tickFormatter={(value) => `${value}h`} />
                                    <Tooltip />
                                    <Legend />
                                    {(Object.entries(chartConfig) as [keyof ChartConfig, ChartConfig[keyof ChartConfig]][]).map(([animalKey, config]) => (
                                        <React.Fragment key={animalKey}>
                                            <Area
                                                type="monotone"
                                                dataKey={`${animalKey}.sleeping`}
                                                stroke={config.color}
                                                fill={`${config.color}40`}
                                                name={`${config.label.label} Sleeping`}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey={`${animalKey}.playing`}
                                                stroke={`${config.color}80`}
                                                fill={`${config.color}20`}
                                                name={`${config.label.label} Playing`}
                                            />
                                        </React.Fragment>
                                    ))}
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Pie Chart for Eating Activities */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Eating Activities Distribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieChartData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        label
                                    >
                                        {pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Analytics;