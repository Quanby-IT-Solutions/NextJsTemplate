import { useState } from 'react'
import { Table } from '@tanstack/react-table'
import { FilterableColumn } from './data-table'
import { CalendarIcon, SortAsc, CheckIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { Slider } from '../ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Input } from '../ui/input'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'

interface DataTableFilterProps<TData> {
    column: FilterableColumn
    table: Table<TData>
}

export function DataTableFilter<TData>({
    column,
    table,
}: DataTableFilterProps<TData>) {
    const columnFilter = table.getColumn(column.id)

    // Hooks need to be called at the top level of the component, outside any conditions.
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
        (columnFilter?.getFilterValue() as string) ?? ""
    )
    const [minValue, maxValue] = (columnFilter?.getFilterValue() as [number, number]) || [0, 100]

    if (!columnFilter) {
        return null
    }

    const handleFilterChange = (value: unknown) => {
        columnFilter.setFilterValue(value)
    }

    switch (column.type) {
        case "search":
            return (
                <Input
                    placeholder={`Search ${column.id}...`}
                    value={(columnFilter.getFilterValue() as string) ?? ""}
                    onChange={(event) => handleFilterChange(event.target.value)}
                    className="h-8 w-[150px] lg:w-[250px]"
                />
            )
        case "dropdown":
            return (
                <Select
                    value={(columnFilter.getFilterValue() as string) ?? ""}
                    onValueChange={(value) => handleFilterChange(value)}
                >
                    <SelectTrigger className="h-8 w-[150px] lg:w-[250px]">
                        <SelectValue placeholder={`Filter ${column.id}...`} />
                    </SelectTrigger>
                    <SelectContent>
                        {column.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )
        case "combobox":
            return (
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {selectedValue
                                ? column.options?.find(option => option.value === selectedValue)?.label
                                : `Select ${column.id}...`}
                            <SortAsc className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder={`Search ${column.id}...`} className="h-9" />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup>
                                    {column.options?.map(option => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onSelect={currentValue => {
                                                setSelectedValue(currentValue === selectedValue ? "" : currentValue)
                                                setOpen(false)
                                                handleFilterChange(currentValue)
                                            }}
                                        >
                                            {option.label}
                                            <CheckIcon
                                                className={`ml-auto h-4 w-4 ${selectedValue === option.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                    }`}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            )
        case "checkbox":
            return (
                <div className="flex flex-col space-y-1">
                    {column.options?.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox
                                id={`${column.id}-${option.value}`}
                                checked={(columnFilter.getFilterValue() as string[])?.includes(option.value)}
                                onCheckedChange={(checked) => {
                                    const currentValue = (columnFilter.getFilterValue() as string[]) || []
                                    const newValue = checked
                                        ? [...currentValue, option.value]
                                        : currentValue.filter((val) => val !== option.value)
                                    handleFilterChange(newValue)
                                }}
                            />
                            <label htmlFor={`${column.id}-${option.value}`} className="text-sm">
                                {option.label}
                                {option.icon && <option.icon className="ml-2 h-4 w-4" />}
                            </label>
                        </div>
                    ))}
                </div>
            )
        case "number":
            return (
                <div className="w-[200px] px-2">
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={[minValue, maxValue]}
                        onValueChange={(value: [number, number]) => handleFilterChange(value)}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>{minValue}</span>
                        <span>{maxValue}</span>
                    </div>
                </div>
            )
        case "date":
            const date = columnFilter.getFilterValue() as Date

            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="h-8 w-[150px] lg:w-[250px] justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, 'PPP') : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => handleFilterChange(date)}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            )
        default:
            return null
    }
}
