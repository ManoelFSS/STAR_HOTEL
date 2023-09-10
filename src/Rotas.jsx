import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Clientes } from "./pages/clientes/Clientes";
import { Estacionamento } from "./pages/estacionamento/Estacionamento";

export const Rotas = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<Home  />} />
                <Route path="/Clientes" element={<Clientes />} />
                <Route path="/Estacionamento" element={<Estacionamento  />} />
                {/* <Route path="/Novo_video/:id" element={<Novo_video  />} /> */}
            </Routes>
        </>
    )
}