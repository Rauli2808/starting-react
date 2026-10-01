import './App.css';
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Directory from './components/Directory';
import SelectedContact from './components/SelectedContact';
import DirectoryContext from './context/DirectoryContext';

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
			<DirectoryContext.Provider
				value={{
					filter,
					filterSet,
					directory,
					directorySet,
					selected,
					selectedSet,
					clicked
				}}
			>
				<h1 className="center">Directory</h1>
				<Filter />
				<div style={{display:'flex'}}>
					<Directory />
					<SelectedContact />
				</div>
			</DirectoryContext.Provider>
		</div>
	);
}

export default App;
