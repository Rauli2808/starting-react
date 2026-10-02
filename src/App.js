import './App.css';
import { useEffect } from 'react';
import Filter from './components/Filter';
import Directory from './components/Directory';
import SelectedContact from './components/SelectedContact';
import useStore from "./store";

const App = () => {
	const directory = useStore(state => state.directory);
	const setDirectory = useStore(state => state.setDirectory);

	useEffect(() => {
		fetch('/starting-react/data.json')
			.then(resp => resp.json())
			.then(data => setDirectory(data.splice(0, 20)));
	}, []);

	if(!directory.length) {
		return <div>Loading Data...</div>
	}

	return (
		<div>
			<h1 className="center">Directory</h1>
			<Filter />
			<div style={{display:'flex'}}>
				<Directory />
				<SelectedContact />
			</div>
		</div>
	);
}

export default App;
