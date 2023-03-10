import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
	const [filteredYear, setfilteredYear] = useState('2023');
	const filterChangeHandler = selectedYear => {
		setfilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
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
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
