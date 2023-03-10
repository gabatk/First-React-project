import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //dataPoints to obiekty, dlatego musimy z nich wyciągnąć tylko wartość
	const totalMaximum = Math.max(...dataPointValues); //Spread operator, bo max potrzebuje pojedynczych wartości, a dataPointValues to array.

	return (
		<div className='chart'>
			{props.dataPoints.map(dataPoint => (
				<ChartBar
					// Key potrezbne, aby react odpowiednio sortował dane}
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
