import React from 'react'
import { Question } from './components/Question.jsx'
import { Expenses } from './components/Expenses.jsx'
import { List } from './components/List.jsx'
import { ControlBudget } from './components/controlBudget.jsx'

function App() {

    const [budget, saveBudget] = React.useState(0)
    const [left, setLeft] = React.useState(0)
    const [view, setView] = React.useState(true)
    const [expenses, saveExpenses] = React.useState([])
    const [expense, saveExpense] = React.useState({})
    const [createExpense, saveCreateExpense] = React.useState(false)

   React.useEffect(() => {
       if(createExpense){

        saveExpenses([
            ...expenses,
            expense
        ])

        const leftBudget = left - expense.number
        setLeft(leftBudget)

        saveCreateExpense(false)
       }
   }, [expense, createExpense, expenses, left]) 

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
      </header>
      <div className="contenido-principal contenido mt-5">
        { view ? 
            (
                <Question
                saveBudget={saveBudget} 
                setLeft={setLeft} 
                setView={setView}/>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <Expenses 
                            saveExpense={saveExpense}
                            saveCreateExpense={saveCreateExpense} /> 
                    </div>
                <div className="col-md-6">
                    <List expenses={expenses}/>
                    <ControlBudget 
                        budget={budget} 
                        left={left}
                    />
                </div>
            </div>
            )
        }
        </div>
    </div>
  );
}

export default App;
