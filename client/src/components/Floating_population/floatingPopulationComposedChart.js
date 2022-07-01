import React, { PureComponent } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
	{ 군구: '광진구', 유동인구수: 32760, 비유동인구수: 34000 },
	{ 군구: '동대문구', 유동인구수: 30480, 비유동인구수: 56000 },
	{ 군구: '마포구', 유동인구수: 27250, 비유동인구수: 23000 },
	{ 군구: '구로구', 유동인구수: 49870, 비유동인구수: 67000 },
	{ 군구: '강남구', 유동인구수: 51420, 비유동인구수: 55000 },
];

export default class floatingPopulationComposedChart extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

	render() {
		return (
			<ComposedChart
				width={1000}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 50,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid stroke="#003458" />
				<XAxis dataKey="군구" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="유동인구수" fill="#82ca9d" />
				<Line type="monotone" dataKey="유동인구수" stroke="#ff7300" />
			</ComposedChart>
		);
	}
}
