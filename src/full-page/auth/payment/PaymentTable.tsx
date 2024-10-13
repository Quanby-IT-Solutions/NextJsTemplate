"use client"

import React, { useEffect, useState } from "react"
import { DataTable, FilterableColumn } from "@/src/components/data-table/data-table"
import { Toaster } from "@/src/components/ui/sonner"
import { columns } from "./PaymentColumns"
import { Spinner } from "@/src/components/spinner/Spinner"
import { Payment } from "@/src/utils/interfaces/dummy_payments"

// Helper function to generate random email
function generateRandomEmail(): string {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
    const domainExtensions = ["com", "net", "org", "io", "co"]

    // Generate random username (6 to 12 characters)
    const usernameLength = Math.floor(Math.random() * 7) + 6
    const username = Array.from({ length: usernameLength }, () =>
        characters[Math.floor(Math.random() * characters.length)]
    ).join("")

    // Generate random domain (3 to 8 characters)
    const domainLength = Math.floor(Math.random() * 6) + 3
    const domain = Array.from({ length: domainLength }, () =>
        characters[Math.floor(Math.random() * characters.length)]
    ).join("")

    // Select random domain extension
    const domainExtension = domainExtensions[Math.floor(Math.random() * domainExtensions.length)]

    return `${username}@${domain}.${domainExtension}`
}

// Helper function to generate sample data
function generatePaymentData(count: number): Payment[] {
    const statuses = ["pending", "processing", "success", "failed"] as const

    const data: Payment[] = []

    for (let i = 0; i < count; i++) {
        data.push({
            id: Math.random().toString(36).substring(2, 10),
            amount: 100 + i * 25,
            status: statuses[i % statuses.length],
            email: generateRandomEmail(),
        })
    }

    return data
}

export default function PaymentTable() {
    const [data, setData] = useState<Payment[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate fetching data with a delay
        const fetchData = async () => {
            setLoading(true)
            const paymentData = generatePaymentData(20)
            setTimeout(() => {
                setData(paymentData)
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
                { label: "Pending", value: "pending" },
                { label: "Processing", value: "processing" },
                { label: "Success", value: "success" },
                { label: "Failed", value: "failed" }
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
