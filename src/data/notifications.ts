export const NOTIFICATIONS = [
    { title: "Distance changed", deviceName: "Device 1", deviceId: 0, description: "Dec. to 600cm", importance: 0, time: new Date(new Date().getTime() - 1000000) },
    { title: "Distance out of bounds", deviceName: "Device 1", deviceId: 0, description: "Inc. to 800cm (Max is 750cm)", importance: 1, time: new Date(new Date().getTime() - 2000000) },
    { title: "Distance changed", deviceName: "Device 2", deviceId: 1, description: "Increase to 500cm", importance: 0, time: new Date(new Date().getTime() - 100000) },
    { title: "Distance out of bounds", deviceName: "Device 4", deviceId: 3, description: "Measuring 40cm (Min is 60cm)", importance: 1, time: new Date(new Date().getTime() - 10000000) }
]