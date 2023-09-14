import React, { createContext, useContext, useState } from 'react'; // importando  o react context
const AppContext = createContext(); // criando o context

export const AppProvider = ({ children }) => { // exportando a funçao de que farar o provider , passando como paramentro children
    
    const [toggle, setToggle] = useState(false);
    const [adm, setAdm] = useState(false);
    const [levelRestrito, setLevelRestrito] = useState();

    const [db_Usuarios] = 
    useState([
      {
        usuario: "admin",
        password: "admin",
        level: "admin"
      },
      {
        usuario: "manoel",
        password: "manoel",
        level: "funcionario"
      }
      ,
      {
        usuario: "fernando",
        password: "fernando",
        level: "admin"
      }
    ]);

    const toggleMenu = () => {
      setToggle(!toggle);
    };

    return ( // usando e retornando o Appcontext.provider e passando o children, passando valores como props  pelo value 
      <AppContext.Provider value={{ toggle, toggleMenu, db_Usuarios, adm, setAdm, setLevelRestrito, levelRestrito,  setToggle }}>
        {children}
      </AppContext.Provider>
    );
};

export const useAppContext = () => {
  return useContext(AppContext);
};