import useStore from "../store";

const Filter = () => {
    const filter = useStore(state => state.filter);
    const setFilter = useStore(state => state.setFilter);

    return (
        <input value={filter} onChange={(event) => setFilter(event.target.value)}></input>
    )
}

export default Filter;