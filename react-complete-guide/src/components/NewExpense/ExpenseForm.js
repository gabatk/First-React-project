import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Aby uniknąć używania kilkukrotnie useState(), możemy stworzyć jeden obiekt w useState (poniżej przykład), a następnie w każdej funkcji nadpisać interesującą nas wartość. Użuwamy spread operator (...), ponieważ jeśli go pominiemy, pozostałe pary klucz-wartość zostaną zgubione.

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// })

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value);
		// Poniższe rozwiązanie działa, jednak nie daje pewności, że userInput pobrany przed zmianami będzie aktualny
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value
		// })

		// Lepiej zastosować takie rozwiązanie:
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredTitle: event.target.value}
		// })
	};

	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value);
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredAmount: event.target.value}
		// })
		// };
	};

	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredDate: event.target.value}
		// })
		// };
	};

	const submitHandler = event => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: + enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		// Czyszczenie inputów dzięki two-way binding.
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2022-01-01'
						max='2025-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel} >Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
