import React, { useEffect, useState } from 'react';

// Criando o contexto
export const AuthContext = React.createContext({});

// Criando e setando as props do provedor do contexto
export const AuthProvider = (props) => {
    // Estados/props/dados
    const [user, setUser] = useState({
        name: '',
        password: ''
    });

    // Autenticação
    useEffect(() => {
        const userStorage = localStorage.getItem("user");

        if (userStorage) {
            setUser(JSON.parse(userStorage));
        }   else {
            setUser({
                name: '',
                password: ''
            });
        }
    }, []);

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

// Hook customizado para acessar o contexto
export const useAuth = () => React.useContext(AuthContext);