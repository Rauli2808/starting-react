import './App.css';
import { useState, useEffect } from 'react';

function RenderRow(item, clickHandler) {
	return (
		<tr key={item.id} className="rows">
			<td>{item.name}</td>
			<td>{item.language}</td>
			<td>{item.bio}</td>
		</tr>
	)
}

function App() {
	const [directory, directorySet] = useState([]);
	const [filter, filterSet] = useState("");

	useEffect(() => {
		// fetch('http://localhost:3000/starting-react/data.json')
		fetch('https://rauli2808.github.io/starting-react/data.json')
			.then(resp => resp.json())
			.then(data => directorySet(data.splice(0, 25)));
	}, []);

	return (
		<div>
			<h1 className="center">Directory</h1>
			Search Name: <input value={filter} placeholder='Start typing...' onChange={(event) => filterSet(event.target.value)}></input>
			<table width="70%">
				<thead>
					<tr>
						<th>Name</th>
						<th>Language</th>
						<th>About</th>
					</tr>
				</thead>
				<tbody>
					{directory.filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
					.map(row => RenderRow(row))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
