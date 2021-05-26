export const tabsArr = [
    {
        name: "Nové",
        status: "RECIEVED"
    },
    {
        name: "Spracované",
        status: "APPROVED"
    },
    {
        name: "Dokončené",
        status: "FINISHED"
    },
    {
        name: "Zrušené",
        status: "CANCELED"
    },
]

export const getStatusColor = (status) => {
    console.log(status)
    if(!status) return

    if(status === "APPROVED") {
        return "black"
    }
    if(status === "CANCELED") {
        return "red"
    }
    if(status === "FINISHED") {
        return "green"
    }
    if(status === "RECIEVED") {
        return "gray"
    }

}