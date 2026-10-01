import React from "react";
import Button from '@mui/material/Button';

const RenderRow = ({ item, clickHandler }) => {
    return (
        <tr key={item.id} className="rows">
            <td>{item.name}</td>
            <td>{item.language}</td>
            <td>
                <Button 
                    onClick={() => clickHandler(item)}
                    variant='contained'
                >More Information</Button>
            </td>
        </tr>
    )
}

export default RenderRow;