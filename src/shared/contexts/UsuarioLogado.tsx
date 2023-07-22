import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
//   logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'William' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}