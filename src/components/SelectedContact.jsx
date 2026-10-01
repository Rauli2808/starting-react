import React, { useContext } from "react";
import DirectoryContext from "../context/DirectoryContext";

const SelectedContact = () => {
    const { state: {selected} } = useContext(DirectoryContext);
    
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