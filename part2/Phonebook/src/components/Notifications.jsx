import React from "react";

const Notification = ({message})=>{
    if(message === ''){
        return null
    }
    return(
        <>
        <p className="notifi">${message}</p>
        </>
    )
}

export default Notification