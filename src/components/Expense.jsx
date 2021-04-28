import React from 'react'

export function Expense({ expense }){
    return(
        <li className="gastos">
            <p>
                {expense.name} 
                <span className="gasto">$ {expense.number}</span> 
            </p>
        </li>
    )
}
