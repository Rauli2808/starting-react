import './App.css';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function RenderRow(item, clickHandler) {
	return (
		<tr key={item.id} className="rows">
			<td>{item.name}</td>
			<td>{item.language}</td>
			<td>
				<Button 
					onClick={() => clickHandler(item)}
					variant='contained'
				>More Information</Button>
			</td>
		</tr>
	)
}

function App() {
	const [directory, directorySet] = useState([]);
	const [filter, filterSet] = useState("");
	const [selected, selectedSet] = useState(null);

	useEffect(() => {
		fetch('https://rauli2808.github.io/starting-react/data.json')
			.then(resp => resp.json())
			.then(data => directorySet(data.splice(0, 20)));
	}, []);

	const clicked = (row) => {
		if(row)
			selectedSet(row);
		else
			selectedSet(null);
	}

	return (
		<div>
			<h1 className="center">Directory</h1>
			<input value={filter} placeholder='Start typing...' onChange={(event) => filterSet(event.target.value)}></input>
			<div style={{display:'flex'}}>
				<table width="80%">
					<thead>
						<tr>
							<th>Name</th>
							<th>Language</th>
						</tr>
					</thead>
					<tbody>
						{directory.filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
						.map(row => RenderRow(row, clicked))}
					</tbody>
				</table>
				{selected &&
					<>
						<div style={{
							margin: '10px',
							minWidth: '100px',
							maxWidth: '100px'
						}}><b>Selected Item: </b>
							{selected.name};{selected.bio}
						</div>
					</> 
				}
			</div>
		</div>
	);
}

export default App;
