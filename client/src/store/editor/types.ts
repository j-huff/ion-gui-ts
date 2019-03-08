

export enum actionTypes{
    SET_TITLE
}

export interface setTitlePayload {
    title:string
}
export interface setTitleParams extends actionParams{
    payload:setTitlePayload
}

export interface actionParams{
    type:actionTypes
}

export interface state {
    title:string,
}

export const initialState:state = {
    title:""
};