import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { ExampleStore } from './ExampleStore';

class RootStore {
    ExampleStore = new ExampleStore();

    constructor() {
        makeAutoObservable(this);
    }
}

const rootStore = new RootStore();

const StoreContext = createContext(rootStore);

function useRootStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useRootStore must be used within RootStoreProvider');
    }

    return context;
}

export { useRootStore, RootStore };
