import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <input value={filter} onChange={(event) => dispatch({type: 'SET_FILTER', payload: event.target.value})}></input>
    )
}

export default Filter;