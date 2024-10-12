export function getStatusColor(status: string) {
    const statusColors: { [key: string]: string } = {
        online: "text-green-500",
        offline: "text-red-500",
    }
    return statusColors[status] || "text-gray-500"
}
