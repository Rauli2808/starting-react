import './App.css';
import { useEffect, useReducer } from 'react';
import Filter from './components/Filter';
import Directory from './components/Directory';
import SelectedContact from './components/SelectedContact';
import DirectoryContext from './context/DirectoryContext';
import {DirectoryReducer} from './reducer/DirectoryReducer';

const App = () => {
	const [state, dispatch] = useReducer(DirectoryReducer, {
		directory: [],
		filter: "",
		selected: null
	});

	useEffect(() => {
		fetch('/starting-react/data.json')
			.then(resp => resp.json())
			.then(data => dispatch({type: 'SET_DIRECTORY', payload: data.splice(0, 20)}));
	}, []);

	return (
		<div>
			<DirectoryContext.Provider
				value={{
					state,
					dispatch,
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
