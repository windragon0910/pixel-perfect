
import { createModel } from '@rematch/core';

const initialState: IState = {
    text: 'Test value'
}

const testModel = createModel({
    state: initialState,
    reducers: {
        clearState() {
            return {
                ...initialState,
            };
        },
    },
    effects: dispatch => ({
        clearExpertState() {
            this.clearState();
        },
    }),
});

export default testModel;

interface IState {
    text: string;
}