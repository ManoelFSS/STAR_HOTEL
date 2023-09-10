import React, { useState } from "react"
import styles from "./Login.module.css"
import { useAppContext } from '../../AppContext';


export const Login = () =>{

    const [usuario, setUsuario] = useState("admin")
    const [senha, setSenha] = useState("admin")
    const {db_Usuarios, setAdm, setLevelRestrito} = useAppContext();

    console.log(db_Usuarios)
   
    const hendele_login = () => {

            event.preventDefault();
        
            let encontrouUsuario = false; // Nova variável para controlar se as condições foram atendidas
        
            for (let i = 0; i < db_Usuarios.length; i++) {
            if (db_Usuarios[i].usuario === usuario.toLowerCase() && db_Usuarios[i].password === senha.toLowerCase() && db_Usuarios[i].level === "admin") {
                setAdm(true);
                setLevelRestrito(false);
                console.log("admin");
                encontrouUsuario = true; // Defina como verdadeiro se uma condição for satisfeita
                break; // Saia do loop, pois já encontramos uma correspondência
            } else if (db_Usuarios[i].usuario === usuario.toLowerCase() && db_Usuarios[i].password === senha.toLowerCase() && db_Usuarios[i].level === "funcionario") {
                setAdm(true);
                setLevelRestrito(true);
                console.log("funcionario");
                encontrouUsuario = true; // Defina como verdadeiro se uma condição for satisfeita
                break; // Saia do loop, pois já encontramos uma correspondência
            }
            }
        
            if (!encontrouUsuario) {
                alert("Nenhum usuário correspondente encontrado"); // Exibe o alerta se nenhum dos if for satisfeito
            }
    }

    return (
        <section className={styles.area_login}  >
            {/* <img src={Logo} alt="STAR HOTEL SISTEM" /> */}
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
        </section>
    )
}