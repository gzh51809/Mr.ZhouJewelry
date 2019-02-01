export const ADD_NAVLIST = 'ADD_NAVLIST';

export function add (data){
    return {
        type:'ADD_NAVLIST',
        payload:data
    }
}

export default{
    add
}