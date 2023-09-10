import React from 'react';
import { LuMenuSquare } from 'react-icons/lu';
import { TbLogout2 } from 'react-icons/tb';
import {VscChromeClose} from 'react-icons/vsc';
import styles from "./Header.module.css"
import { useAppContext } from '../../AppContext';

export const Header = ()=>{

    const { toggle, toggleMenu, setAdm } = useAppContext();

    return (
        <header>
            <div   onClick={toggleMenu} >
                { toggle === false ? (
                        <LuMenuSquare className={styles.icone_menu}/>
                    ) : (
                        <VscChromeClose className={styles.icone_menu}/>
                    )
                }
            </div>
            <p onClick={()=> setAdm(false)}>
                <TbLogout2/>Sair
            </p>
        </header>
    )
}