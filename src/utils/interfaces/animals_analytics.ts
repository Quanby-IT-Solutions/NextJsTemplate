import { LucideIcon } from "lucide-react";

interface BirdActivity {
    sleeping: number;
    eating: number;
    playing: number;
    grooming: number;
    flying: number;
}

interface OtherAnimalActivity {
    sleeping: number;
    eating: number;
    playing: number;
    grooming: number;
    running: number;
}

export interface MonthlyData {
    month: string;
    cat: OtherAnimalActivity;
    dog: OtherAnimalActivity;
    bird: BirdActivity;
    rabbit: OtherAnimalActivity;
}

export interface ChartConfig {
    [key: string]: {
        label: { label: string; icon: LucideIcon };
        color: string;
    };
}

/**
 * This is used in the Analytics in dashboard
 */