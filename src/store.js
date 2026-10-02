import { create } from 'zustand';

const useStore = create((setState) => ({
    directory: [],
    filter: "",
    selected: null,
    setDirectory: (directory) => setState((state) => ({
        ...state,
        directory
    })),
    setFilter: (filter) => setState((state) => ({
        ...state,
        filter
    })),
    setSelected: (selected) => setState((state) => ({
        ...state,
        selected
    })),
}))

export default useStore;