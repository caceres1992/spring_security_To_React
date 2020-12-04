import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css';
import UsuarioContext from '../../context/Usuario/usuarioContext'



const Login = (props) => {

    const usuariocontext = useContext(UsuarioContext)
    const { IniciarSession, autenticado } = usuariocontext

    useEffect(() => {
        if (autenticado) {
            props.history.push('/home');
        }
    }, [autenticado])



    const [login, setLogin] = useState(
        {
            username: '',
            password: ''
        }
    )



    const { username, password } = login;

    const changleHandle = (e) => {

        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })

        console.log(login)

    }

    const tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 4,
        },
    };
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 4,
        },


    };


    const Signin = (input) => {
        input.preventDefault();
        console.log(username)
        if (username.trim() === '' || password.trim() === '') {
            console.log('no enviando')
            return
        }
        console.log('enviando')

        setLogin(login)
        IniciarSession(login)
    }
    return (
        <Form

            {...layout}
            onSubmitCapture={Signin}
            name="basic"
            initialValues={{
                remember: true,
            }}

        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input
                    onChange={changleHandle}
                    value={username}
                    name="username" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password
                    name="password"
                    value={password}
                    onChange={changleHandle}
                />

            </Form.Item>




            <input type="submit" />

        </Form>
    )
}

export default Login;
