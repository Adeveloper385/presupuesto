import React from 'react'
import { Error } from './Error'
import shortid from 'shortid'

export function Expenses({ saveExpense, saveCreateExpense }){

    const [name, setName] = React.useState()
    const [number, setNumber] = React.useState()
    const [error, setError] = React.useState(false)


    const handleSubmit = e => {
        e.preventDefault()
       
        //Validations
        if(number < 1 || isNaN(number) || name.trim() === ''){
            setError(true)
            return;
        } else {
            setError(false)
        }

        //create expense
        const expense = {
            name,
            number,
            id: shortid.generate()
        }

        //addExpense
        saveExpense(expense)
        saveCreateExpense(true)
        
        //reset form
        setName('')
        setNumber(0)
    }

    return(

        <form onSubmit={handleSubmit}>
            <h2>Agrega tus Gastos</h2>
            { error ? <Error message="Llena ambos campos o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label >Gasto</label>
                <input 
                    type="text"
                    placeholder="Ejm. Transporte"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label >Cantidad</label>
                <input 
                    type="number"
                    placeholder="Cuánto gastaste?"
                    className="form-control"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                />
            </div>
            <button className="btn btn-primary btn-block my-3">Agregar Gasto</button>
        </form>
    )
}
