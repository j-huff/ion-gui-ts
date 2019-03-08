import {initialState, actionTypes, actionParams} from './types';
import * as types from './types'

export default function(state = initialState, action:actionParams){
    switch (action.type) {
        case actionTypes.SET_TITLE:{
            const params = action as types.setTitleParams
            return {
                ...state,
                title: params.payload.title
            };
        }
        default:
            return state;
    }
}

