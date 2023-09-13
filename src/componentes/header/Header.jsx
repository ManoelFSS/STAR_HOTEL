import React, { useState } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { RiMoonFoggyFill } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb';
import {VscChromeClose} from 'react-icons/vsc';
import {IoMdSunny} from 'react-icons/io';
import styles from "./Header.module.css"
import { useAppContext } from '../../AppContext';


export const Header = ()=>{

    const { toggle, toggleMenu, setAdm } = useAppContext();
    const [theme, setTheme] = useState(false)


    const hendeleTheme = ()=>{

        setTheme(theme === false  ? true : false )

        if(theme === false){
            document.querySelector("body").classList.add("newCores")
        }else if(theme === true){
            document.querySelector("body").classList.remove("newCores")
        }
    }

    return (
        <header>
            <div   onClick={toggleMenu} >
                { toggle === false ? (
                        <VscChromeClose className={styles.icone_menu}/>   
                    ) : (
                        <BsBoxArrowRight className={styles.icone_menu}/>
                    )
                }
            </div>
            <div className={styles.area_close_dark}>
                <p onClick={()=> setAdm(false)}>
                    <TbLogout2/>Sair
                </p>
                <span onClick={()=> hendeleTheme()}>
                    { theme === false ? (
                            <IoMdSunny className={styles.toggle_white}/>
                        ) : (
                            <RiMoonFoggyFill className={styles.toggle_white}/>
                        )
                    }
                </span>
            </div>
        </header>
    )
}