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

	return (
		// <div>
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{props.items.map(expense => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
		// </div>
	);
};

export default Expenses;
