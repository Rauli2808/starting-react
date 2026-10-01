import './App.css';
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Directory from './components/Directory';
import SelectedContact from './components/SelectedContact';

const App = () => {
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
			<Filter filter={filter} filterSet={filterSet}></Filter>
			<div style={{display:'flex'}}>
				<Directory
					directory={directory}
					clicked={clicked}
					filter={filter}
				></Directory>
				<SelectedContact selected={selected}></SelectedContact>
			</div>
		</div>
	);
}

export default App;
