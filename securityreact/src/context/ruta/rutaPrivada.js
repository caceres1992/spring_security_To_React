import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import UsuarioContext from '../Usuario/usuarioContext'
const rutaPrivada = ({ component: Component, ...props }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const usuarioContext = useContext(UsuarioContext)
    const { autenticado, usuarioAutenticado } = usuarioContext;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])
    
    return (
        <Route
            {...props} render={props => !autenticado
                ?
                (
                    <Redirect to="/" />
                )
                :
                (
                    <Component {...props} />
                )
            }
        />


    );
}

export default rutaPrivada
