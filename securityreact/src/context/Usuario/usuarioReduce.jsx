import { ADDUSUARIO, CERRARSESSION, LOGIN } from '../../types/index'
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('token', action.payload.accessToken);
            return {
                ...state,
                autenticado: true,
                usuario:action.payload
            }
        case CERRARSESSION:
            localStorage.removeItem('token')
            return {
                ...state,
                autenticado: false,
                token: null,
                usuario: null
            }
        default:
            return state;
    }
}