import React, { useContext } from "react";
import "../App.css";
import RenderRow from "./RenderRow";
import DirectoryContext from "../context/DirectoryContext";

const Directory = () => {
    const { directory, clicked, filter } = useContext(DirectoryContext);

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
                .map(row => <RenderRow item={row}></RenderRow>)}
            </tbody>
        </table>
    );
}

export default Directory;