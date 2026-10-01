import './App.css';
import { useEffect } from 'react';
import Filter from './components/Filter';
import Directory from './components/Directory';
import SelectedContact from './components/SelectedContact';
import { DirectoryReducer } from './reducer/DirectoryReducer';
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from 'react-redux';

const store = configureStore({reducer: DirectoryReducer});

const App = () => {
	const directory = useSelector(state => state.directory);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('/starting-react/data.json')
			.then(resp => resp.json())
			.then(data => dispatch({type: 'SET_DIRECTORY', payload: data.splice(0, 20)}));
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

export default () => <Provider store={store}><App /></Provider>;
