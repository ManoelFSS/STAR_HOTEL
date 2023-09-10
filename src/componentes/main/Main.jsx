import React from "react"
import styles from "./Main.module.css"
import { Rotas } from "../../Rotas"
import { Menu } from "../menu/Menu"
import { useAppContext } from '../../AppContext'; // importando o contexto do react 
import { Login } from "../../pages/login/Login";
import { Header } from "../header/Header";

export const Main = ()=>{

    const {adm} = useAppContext() // pegando valor do adm

    return (
        <>
            {   // rederizaçao condicional se adm for true  mostra na tela 
                //Header, e Main com o Menu e as Rotas
                adm === true ? (
                    <>
                        <Header/>
                        <main className={styles.container}>
                            <Menu/>
                            <Rotas/>
                        </main>
                    </>
                ) : (
                    <Login/> // caso contrario mostra page do Login
                )
            }
        </>
    )
}