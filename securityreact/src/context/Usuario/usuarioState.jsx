import { useReducer } from "react"
import clienteAxios from "../../config/clienteAxios"
import { CERRARSESSION, LOGIN } from "../../types"
import usuarioContext from "./usuarioContext"
import usuarioReduce from "./usuarioReduce"
import tokenAuth from '../../config/token'
const usuarioState = (props) => {


    const initialState = {
        token: null,
        usuarios: [],
        usuario: null,
        autenticado: null
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(usuarioReduce, initialState)


    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }

        try {
            const response = await clienteAxios.get('/test/admin')
            console.log(response)


        } catch (error) {
            console.log(error.response)
        }
    }
    const IniciarSession = async (usuario) => {

        try {
            const response = await clienteAxios.post('/auth/signin', usuario);
            // Obtener el usuario

            dispatch({
                type: LOGIN,
                payload: response.data
            })

            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data)
        }




    }



    const cerrarSession = () => {
        dispatch({
            type: CERRARSESSION
        })
    }
    return (
        <usuarioContext.Provider
            value={
                {
                    token: state.token,
                    usuarios: state.usuarios,
                    usuario: state.usuario,
                    autenticado: state.autenticado,
                    IniciarSession,
                    cerrarSession,
                    usuarioAutenticado
                }
            }>
            {props.children}
        </usuarioContext.Provider>
    )
}

export default usuarioState