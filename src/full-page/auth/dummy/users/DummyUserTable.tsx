"use client"

import React, { useEffect, useState } from "react"
import { DataTable, FilterableColumn } from "@/src/components/data-table/data-table"
import { Toaster } from "@/src/components/ui/sonner"
import { Spinner } from "@/src/components/spinner/Spinner"
import { User } from "@/src/utils/interfaces/user_management"
import { columns } from "./UserColumns"

export default function DummyUserTable() {
    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch("/api/dummy/users")
            const users = await response.json()
            console.log(users);
            setTimeout(() => {
                setData(users)
                setLoading(false)
            }, 1500)
        }
        fetchData()
    }, [])

    const filterableColumns: FilterableColumn[] = [
        { id: "email", type: "search" },
        {
            id: "status",
            type: "combobox",
            options: [
                { label: "Online", value: "online" },
                { label: "Offline", value: "offline" }
            ]
        },
    ]

    return (
        <>
            <Toaster richColors position="bottom-right" />
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spinner size="large" />
                </div>
            ) : (
                <DataTable columns={columns} data={data} filterableColumns={filterableColumns} />
            )}
        </>
    )
}
