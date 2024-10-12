export function getStatusColor(status: string) {
    const statusColors: { [key: string]: string } = {
        pending: "text-yellow-500",
        processing: "text-blue-500",
        success: "text-green-500",
        failed: "text-red-500",
    }
    return statusColors[status] || "text-gray-500"
}
