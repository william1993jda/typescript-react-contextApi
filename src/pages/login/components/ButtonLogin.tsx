import React from "react";

interface IButtonLoginProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
}

// por conta do tipo FC do ReactNode, eu posso passar o Children para pegar o texto do botão
export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children, className }) => {

    return (
        <button className={className} type={type} onClick={onClick}>
            { children }
        </button>
    )
}