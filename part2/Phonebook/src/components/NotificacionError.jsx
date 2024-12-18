import React from "react";

const NotificationError = ({message})=>{
    if(message === ''){
        return null
    }
    return(
        <>
        <p className="notifiError">${message}</p>
        </>
    )
}

export default NotificationError