import { makeAutoObservable } from 'mobx';

export class ExampleStore {
    constructor() {
        makeAutoObservable(this);
    }

    testBoolean = false;
    setTestBoolean() {
        this.testBoolean = !this.testBoolean;
    }
}
