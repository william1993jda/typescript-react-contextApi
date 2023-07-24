import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const [nome, setNome] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setNome('Marcos Oliveira')
        }, 3000)
    })

    // Altamente recomendado que se use o useCallback em funções compartilhadas no contexto
    const handleLogout = useCallback(() => {
        console.log('Logout')
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
            { children }
        </UsuarioLogadoContext.Provider>
    )
}