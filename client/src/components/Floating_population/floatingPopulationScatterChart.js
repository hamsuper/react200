import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
	{ 군구: '광진구', 유동인구수: 32760, 비유동인구수: 34000 },
	{ 군구: '동대문구', 유동인구수: 30480, 비유동인구수: 56000 },
	{ 군구: '마포구', 유동인구수: 27250, 비유동인구수: 23000 },
	{ 군구: '구로구', 유동인구수: 49870, 비유동인구수: 67000 },
	{ 군구: '강남구', 유동인구수: 51420, 비유동인구수: 55000 },
];

export default class floatingPopulationScatterChart extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

	render() {
		return (
			<ScatterChart
				width={1000}
				height={300}
				margin={{
					top: 5,
					right: 50,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid />
				<XAxis type="number" dataKey="비유동인구수" name="비유동인구수" unit="명" />
				<YAxis type="number" dataKey="유동인구수" name="유동인구수" unit="명" />
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
				<Scatter data={data} fill="#003458" />
			</ScatterChart>
		);
	}
}
