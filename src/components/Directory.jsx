import React from "react";
import "../App.css";
import RenderRow from "./RenderRow";

const Directory = ({ directory, clicked, filter }) => {
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
                .map(row => <RenderRow item={row} clickHandler={clicked}></RenderRow>)}
            </tbody>
        </table>
    );
}

export default Directory;