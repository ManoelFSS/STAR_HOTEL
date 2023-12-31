import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css"
import { Link } from "react-router-dom"

import { IoHome } from 'react-icons/io5';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { AiFillCar, AiFillDatabase } from 'react-icons/ai';
import { MdBed } from 'react-icons/md';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { FaCalendarDays, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiHotelFill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';

import Logo from "../../assets/images/hotel01.jpg"
import { useAppContext } from "../../AppContext";

export const Menu = () => {

    const { toggle, levelRestrito, setToggle } = useAppContext();
    const [classAtiva, setClassAtiva] = useState("Home")
    const [classLink, setClassLink] = useState("Home")
    const [getTela, setgetTela] = useState()

    const hendeleTggle = () => {

        const larguraTela = window.innerWidth
        setgetTela(larguraTela)

        if(larguraTela < 550){
            setToggle(true)
        }else{
            setToggle(false)
        }

    }

    window.addEventListener('resize',hendeleTggle);
    
    useEffect(()=>{
        hendeleTggle()
        console.log("tela")
    },[])
   
    
   

   
    return (
        <nav className={styles.nave_Ber} style={{width: toggle ? "60px" : "240px"}}>
            
            <label 
                htmlFor="updateFoto" 
                style={{display:!toggle ? "block" : "none"}}
            >
                <img src={Logo} alt="Logo tipo" />
                <h4>Manoel</h4>
            </label>
            <input 
                id="updateFoto" 
                type="file" 
                accept="image/*" 
                style={{display: "none"}} 
                onChange={(e)=> hendeleUpdateFoto(e)}
            />
            <ul>
                <li>
                    <Link
                        onClick={() => {setClassLink("Home"); setClassAtiva("Home"); setToggle(true)}}
                        className={classLink === "Home" ? styles.link_Ativo : styles.link}
                        to={"/"}>
                        <IoHome
                            onClick={() => setClassAtiva("Home")}
                            className={classAtiva === "Home" ? styles.icone_Ativo : styles.icone}
                        />
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {setClassLink("Clientes"); setClassAtiva("Clientes"); setToggle(true)}}
                        className={classLink === "Clientes" ? styles.link_Ativo : styles.link}
                        to={"/Clientes"}>
                        <BsFillPersonVcardFill 
                            onClick={() => setClassAtiva("Clientes")}
                            className={classAtiva === "Clientes" ? styles.icone_Ativo : styles.icone}
                        />
                        Clientes
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {setClassLink("Estacionamento"); setClassAtiva("Estacionamento"); setToggle(true)}}
                        className={classLink === "Estacionamento" ? styles.link_Ativo : styles.link}
                        to={"/Estacionamento"}>
                        <AiFillCar 
                            onClick={() => setClassAtiva("Estacionamento")}
                            className={classAtiva === "Estacionamento" ? styles.icone_Ativo : styles.icone}
                        />
                        Estacionamento
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {setClassLink("Acomodações"); setClassAtiva("Acomodações"); setToggle(true)}}
                        className={classLink === "Acomodações" ? styles.link_Ativo : styles.link}
                        to={"/Acomodações"}>
                        <MdBed 
                             onClick={() => setClassAtiva("Acomodações")}
                             className={classAtiva === "Acomodações" ? styles.icone_Ativo : styles.icone}
                        />
                        Acomodações
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {setClassLink("Estoque"); setClassAtiva("Estoque"); setToggle(true)}}
                        className={classLink === "Estoque" ? styles.link_Ativo : styles.link}
                        to={"/Estoque"}>
                        <AiFillDatabase 
                            onClick={() => setClassAtiva("Estoque")}
                            className={classAtiva === "Estoque" ? styles.icone_Ativo : styles.icone}
                        />
                        Estoque
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {setClassLink("Frigobar"); setClassAtiva("Frigobar"); setToggle(true)}}
                        className={classLink === "Frigobar" ? styles.link_Ativo : styles.link}
                        to={"/Frigobar"}>
                        <CgSmartHomeRefrigerator 
                            onClick={() => setClassAtiva("Frigobar")}
                            className={classAtiva === "Frigobar" ? styles.icone_Ativo : styles.icone}
                        />
                        Frigobar
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={() => {setClassLink("Resevas"); setClassAtiva("Resevas"); setToggle(true)}}
                        className={classLink === "Resevas" ? styles.link_Ativo : styles.link} 
                        to={"/Resevas"}>
                        <FaCalendarDays 
                            onClick={() => setClassAtiva("Resevas")}
                            className={classAtiva === "Resevas" ? styles.icone_Ativo : styles.icone}
                        />
                        Resevas
                    </Link>
                </li>
                <li>
                    {
                        levelRestrito === false ? (
                            <Link 
                                onClick={() => {setClassLink("Financeiro"); setClassAtiva("Financeiro"); setToggle(true)}}
                                className={classLink === "Financeiro" ? styles.link_Ativo : styles.link} 
                                to={"/Financeiro"}>
                                <FaMoneyBillTrendUp 
                                    onClick={() => setClassAtiva("Financeiro")}
                                    className={classAtiva === "Financeiro" ? styles.icone_Ativo : styles.icone}
                                />
                                Financeiro
                            </Link>
                        ) : (
                            <></>
                        )
                    }
                </li>
                <li>
                    {
                        levelRestrito === false ? (
                            <Link 
                                onClick={() => {setClassLink("Pagamentos"); setClassAtiva("Pagamentos"); setToggle(true)}}
                                className={classLink === "Pagamentos" ? styles.link_Ativo : styles.link} 
                                to={"/Pagamentos"}>
                               <GiReceiveMoney 
                                    onClick={() => setClassAtiva("Pagamentos")}
                                    className={classAtiva === "Pagamentos" ? styles.icone_Ativo : styles.icone}
                                />
                                Pagamentos
                            </Link>
                        ) : (
                            <></>
                        )
                    }
                </li>
                <li>
                    {
                         levelRestrito === false ? (
                            <Link 
                                onClick={() => {setClassLink("Posada/Hotel"); setClassAtiva("Posada/Hotel"); setToggle(true)}}
                                className={classLink === "Posada/Hotel" ? styles.link_Ativo : styles.link} 
                                to={"/Posada/Hotel"}>
                                <RiHotelFill 
                                    onClick={() => setClassAtiva("Posada/Hotel")}
                                    className={classAtiva === "Posada/Hotel" ? styles.icone_Ativo : styles.icone}
                                />
                                Posada | Hotel
                            </Link>
                         ) : (
                            <></>
                         )

                    }
                </li>
                <li>
                    { 
                        levelRestrito === false ? (
                            <Link 
                                onClick={() => {setClassLink("Adiministrador"); setClassAtiva("Adiministrador"); setToggle(true)}}
                                className={classLink === "Adiministrador" ? styles.link_Ativo : styles.link} 
                                to={"/Adiministrador"}>
                                <IoSettingsSharp 
                                    onClick={() => setClassAtiva("Adiministrador")}
                                    className={classAtiva === "Adiministrador" ? styles.icone_Ativo : styles.icone}
                                />
                                Adiministrador
                            </Link>
                        ) : (
                           <></>
                        )

                    }
                </li>
            </ul>
        </nav>
    )
}