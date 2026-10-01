import { useSelector } from "react-redux";

const SelectedContact = () => {
    const selected = useSelector(state => state.selected);
    
    return (
       selected &&
        <>
            <div style={{
                margin: '10px',
                minWidth: '100px',
                maxWidth: '100px'
            }}><b>Selected Item: </b>
                {selected.name};{selected.bio}
            </div>
        </>
    );
}

export default SelectedContact;