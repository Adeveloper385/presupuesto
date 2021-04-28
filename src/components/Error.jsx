import React from 'react'

export function Error({message}) {
    return(
           <p className="alert alert-danger error">{message}</p> 
    )
}
