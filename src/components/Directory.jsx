import "../App.css";
import RenderRow from "./RenderRow";
import { useSelector, useDispatch } from "react-redux";

const Directory = () => {
    const directory = useSelector(state => state.directory);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const clicked = (row) => {
		if(row)
			dispatch({type: 'SET_SELECTED', payload: row});
	}

    return (
        <table width="80%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                {directory.filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
                .map(row => <RenderRow item={row} clicked={clicked}></RenderRow>)}
            </tbody>
        </table>
    );
}

export default Directory;