import React, { useContext } from "react";
import Button from '@mui/material/Button';
import DirectoryContext from "../context/DirectoryContext";

const RenderRow = ({ item, clicked }) => {
    return (
        <tr key={item.id} className="rows">
            <td>{item.name}</td>
            <td>{item.language}</td>
            <td>
                <Button 
                    onClick={() => clicked(item)}
                    variant='contained'
                >More Information</Button>
            </td>
        </tr>
    )
}

export default RenderRow;