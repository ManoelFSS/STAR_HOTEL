import React, { useState } from "react"
import styles from "./Login.module.css"
import { useAppContext } from '../../AppContext';


export const Login = () =>{

    const [usuario, setUsuario] = useState("admin")
    const [senha, setSenha] = useState("admin")
    const {db_Usuarios, setAdm, setLevelRestrito} = useAppContext();
   
    const hendele_login = () => {

            event.preventDefault();
        
            let encontrouUsuario = false; // Nova variável para controlar se as condições foram atendidas
        
            for (let i = 0; i < db_Usuarios.length; i++) {
            if (db_Usuarios[i].usuario === usuario.toLowerCase() && db_Usuarios[i].password === senha.toLowerCase() && db_Usuarios[i].level === "admin") {
                setAdm(true);
                setLevelRestrito(false);
                console.log("admin");
                encontrouUsuario = true; // Defina como verdadeiro se uma condição for satisfeita
              
            } else if (db_Usuarios[i].usuario === usuario.toLowerCase() && db_Usuarios[i].password === senha.toLowerCase() && db_Usuarios[i].level === "funcionario") {
                setAdm(true);
                setLevelRestrito(true);
                console.log("funcionario");
                encontrouUsuario = true; // Defina como verdadeiro se uma condição for satisfeita
              
            }
            }
        
            if (!encontrouUsuario) {
                alert("Ops! Usuario ou Senha invalido \n Por favor tente novamente ou entre em contato com Administrador")
            }
    }

    return (
        <section className={styles.area_login}  >
            <div className={styles.container}>
                <h1>
                    STAR HOTEL
                </h1>
                <form className={styles.form_login}>
                    <div>
                        <label htmlFor="">Usuário</label>
                        <input 
                            type="text" 
                            placeholder="Digite seu Usuário" 
                            autoComplete="off"
                            value={usuario}
                            onChange={(e)=> setUsuario(e.target.value)}
                            />
                    </div>
                    <div>
                        <label htmlFor="">Senha</label>
                        <input 
                            type="password" 
                            placeholder="Digite sua Senha" 
                            autoComplete="off"
                            value={senha}
                            onChange={(e)=> setSenha(e.target.value)}
                            />
                    </div>
                    <div>
                        <button onClick={(e)=> {hendele_login(); }}>
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}