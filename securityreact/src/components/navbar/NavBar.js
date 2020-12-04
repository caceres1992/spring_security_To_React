import { Button, Menu } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import UsuarioContext from '../../context/Usuario/usuarioContext'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Home from '../home/Home';

const NavBar = (props) => {


    const usuarioContext = useContext(UsuarioContext)
    const { cerrarSession, autenticado, usuario } = usuarioContext;

    const [role, setRole] = useState({
        admin: false,
        mod: false
    })
    const { admin, mod } = role;

    const { roles } = usuario;

    useEffect(() => {

        var admintrue;
        var modetrue;

        roles.forEach(role => {

            switch (role) {
                case 'ROLE_ADMIN':
                    admintrue = true;
                    break;
                case 'ROLE_MODERATOR':
                    modetrue = true;
                    break;
                default:
                    console.log('USUARIO DEFAULT')
            }

        }
        )
        setRole({
            ...role,
            admin: admintrue,
            mod: modetrue
        })
        console.log(admintrue)
    }, [])




    const [hide, setHide] = useState(false);
    const activarDesactivar = () => {
        if (hide) {
            setHide(false)
        } else {
            setHide(true)
        }
    }
    console.log('verificando')
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                collapsible
                collapsed={hide}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

                    {admin
                        ?
                        <Menu.Item key="1">
                            Nuevos Empleados
                     </Menu.Item>
                        :
                        null
                    }


                    <Menu.Item key="2"
                    >
                        NEW ROOMS
            </Menu.Item>
                    <Menu.Item key="3" >
                        RECEPCION
            </Menu.Item>
                    <Menu.Item key="4" >
                        <Button
                            onClick={() => cerrarSession()}
                        >Cerrar Session</Button>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Home />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout >
    )


}



export default NavBar
