import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = props => {
	const [filteredYear, setfilteredYear] = useState('2023');
	const filterChangeHandler = selectedYear => {
		setfilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// Poniżej drugi sposób na warunkowe wyświetlanie treści
	let expensesContent = <p>No expenses found.</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expense => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		// <div>
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{/* Poniżej jeden ze sposobów na warunkowe wyświetlanie treści */}
			{/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
			{filteredExpenses.length > 0 &&
				filteredExpenses.map(expense => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))} */}
			{expensesContent}
		</Card>
		// </div>
	);
};

export default Expenses;
