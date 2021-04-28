import React from 'react'
import { Error } from './Error.jsx'

export function Question({saveBudget, setLeft, setView}) {

    const [quantity, saveQuantity] = React.useState(0);
    const [error, setError] = React.useState(false)

    const defineBudget = e => {
       saveQuantity(parseInt(e.target.value, 10)) 
    }

    const submitBudget = e => {
       e.preventDefault();

        //Validations
        if(quantity < 1 || isNaN(quantity)){
            setError(true)
            return;
        }
            setError(false)
            saveBudget(quantity)
            setLeft(quantity)
            setView(false)
    }

    return(
    <>

        <h2>Presupesto Semanal</h2>

        {error ? <Error message='El Presupuesto es Incorrecto'/> : null }
        <form onSubmit={submitBudget}>
            <input 
                type="number"
                placeholder="Cual es tu presupuesto semanal?"
                className="form-control"
                onChange={defineBudget}
            />
            <button 
                type="submit"
                className="btn btn-primary btn-block my-3"
            >Guardar Presupuesto</button>
        </form>
    </>
    )
}
