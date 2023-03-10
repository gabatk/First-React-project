import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
	return (
		<div className='chart'>
			{props.dataPoints.map(dataPoint => (
				<ChartBar
					// Key potrezbne, aby react odpowiednio sortował dane}
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={null}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
