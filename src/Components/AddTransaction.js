import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {
	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)
	const { addTransaction} = useContext(GlobalContext);
	let [color, toggleColor] = useState(true);


	const onSubmit = e => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text, 
			amount: +amount
		}

		addTransaction(newTransaction);
	}


	function updateColor()
	{
		console.log("Color Changed");
		toggleColor(!color);
	
	}


	

	return(
		<>
		<h3>Add New Transaction</h3>
		<div className="bot-bord"> </div>
		<form onSubmit = {onSubmit}>
			<div className="form-control">
				<label htmlFor="text">Item</label>
				<input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Item"/>
			</div>
			<div className="form-control">
				<label htmlFor="amount">Amount <br />
				(negative - expenses, positive - income)</label>
				<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
				 placeholder="Enter amount..."/>
			</div>
			<button className={color ? "btn": "btn-changed"} onClick={updateColor}> Add Transaction</button>
		</form>
			

		</>
	)
}