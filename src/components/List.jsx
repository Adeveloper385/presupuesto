import React from 'react'
import { Expense } from './Expense'


export function List({ expenses }){
    return (
        <div className="gastos-realizados">
            <h2>Lista de Gastos</h2>
            <ul>
                { expenses.map(expense => (
                    <Expense 
                        key={expense.id}
                        expense={expense}
                    />
                ))}
            </ul>
        </div>
    )
}
