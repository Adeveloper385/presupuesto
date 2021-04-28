import React from 'react'
import { setClass } from '../helper.js'

export function ControlBudget({ budget, left }){
    return(
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={setClass(budget, left)}>
                Restante: $ {left}
            </div>
        </>
    )
}
