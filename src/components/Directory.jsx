import "../App.css";
import RenderRow from "./RenderRow";
import useStore from "../store";

const Directory = () => {
    const directory = useStore(state => state.directory);
    const filter = useStore(state => state.filter);
    const setSelected = useStore(state => state.setSelected);

    const clicked = (row) => {
		if(row)
			setSelected(row);
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