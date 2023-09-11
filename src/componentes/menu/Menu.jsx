import React, { useState } from "react";
import styles from "./Menu.module.css"
import { Link } from "react-router-dom"
import { IoHome } from 'react-icons/io5';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';
import { MdBed } from 'react-icons/md';
import { AiFillDatabase } from 'react-icons/ai';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiHotelFill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import Logo from "../../assets/images/hotel01.jpg"
import { useAppContext } from "../../AppContext";

export const Menu = () => {

    const { toggle, levelRestrito } = useAppContext();
    const [classAtiva, setClassAtiva] = useState("Home")
    const [classLink, setClassLink] = useState("Home")


    return (
        <nav className={styles.nave_Ber} style={{width: toggle ? "60px" : "200px"}}>
            <div  style={{display:!toggle ? "block" : "none"}}>
                <img src={Logo} alt="Logo tipo" />
                <h4>Manoel</h4>
            </div>
            <ul>
                <li>
                    <Link
                    onClick={() => {setClassLink("Home"); setClassAtiva("Home")}}
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
                     onClick={() => {setClassLink("Clientes"); setClassAtiva("Clientes")}}
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
                     onClick={() => {setClassLink("Estacionamento"); setClassAtiva("Estacionamento")}}
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
                     onClick={() => {setClassLink("Acomodações"); setClassAtiva("Acomodações")}}
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
                     onClick={() => {setClassLink("Estoque"); setClassAtiva("Estoque")}}
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
                     onClick={() => {setClassLink("Frigobar"); setClassAtiva("Frigobar")}}
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
                    onClick={() => {setClassLink("Resevas"); setClassAtiva("Resevas")}}
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
                    <Link 
                     onClick={() => {setClassLink("Financeiro"); setClassAtiva("Financeiro")}}
                     className={classLink === "Financeiro" ? styles.link_Ativo : styles.link} 
                    to={"/Financeiro"}>
                        <FaMoneyBillTrendUp 
                             onClick={() => setClassAtiva("Financeiro")}
                             className={classAtiva === "Financeiro" ? styles.icone_Ativo : styles.icone}
                        />
                        Financeiro
                    </Link>
                </li>
                <li>
                    <Link 
                     onClick={() => {setClassLink("Pagamentos"); setClassAtiva("Pagamentos")}}
                     className={classLink === "Pagamentos" ? styles.link_Ativo : styles.link} 
                    to={"/Pagamentos"}>
                        <GiReceiveMoney 
                            onClick={() => setClassAtiva("Pagamentos")}
                            className={classAtiva === "Pagamentos" ? styles.icone_Ativo : styles.icone}
                        />
                        Pagamentos
                    </Link>
                </li>
                <li>
                    <Link 
                     onClick={() => {setClassLink("Posada/Hotel"); setClassAtiva("Posada/Hotel")}}
                     className={classLink === "Posada/Hotel" ? styles.link_Ativo : styles.link} 
                    to={"/Posada/Hotel"}>
                        <RiHotelFill 
                           onClick={() => setClassAtiva("Posada/Hotel")}
                           className={classAtiva === "Posada/Hotel" ? styles.icone_Ativo : styles.icone}
                        />
                        Posada/Hotel
                    </Link>
                </li>
                <li>
                    { 
                        levelRestrito === false ? (
                            <Link 
                            onClick={() => {setClassLink("Adiministrador"); setClassAtiva("Adiministrador")}}
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