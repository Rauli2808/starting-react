import Button from '@mui/material/Button';

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