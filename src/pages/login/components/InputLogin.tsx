import React from "react";

interface IInputLoginProps {
    label: string;
    value: string;
    id: string;
    type?: string;
    htmlFor: string;
    placeholder: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.htmlFor} className="form-label">{props.label}</label>
            <input
                ref={ref}
                id={props.id}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                ? props.onPressEnter && props.onPressEnter() : undefined}
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
            />
        </div>
    )
})