import { useCallback, useState, useRef } from 'react'
import { InputLogin } from './components/InputLogin'
import { ButtonLogin } from './components/ButtonLogin'
import { useUsuarioLogado } from '../../shared/hooks'

export const Login = () => {
    const inputSenhaRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const { nomeDoUsuario } = useUsuarioLogado();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // useEffect(() => {
    //     if (window.confirm('Você é homem?')) {
    //         console.log('Você é homem')
    //     } else {
    //         console.log('Vôce é mulher')
    //     }
    // }, [])

    // useMemo é para operações mais complicadas de ser resolvida, 
    // por exemplo um calculo, com isso ele não executa toda vez que o estado for alterado
    // const emailLenght = useMemo(() => {
    //     console.log('Executou')
    //     return email.length * 1000;
    // }, [email.length]);

    // useEffect(() => {
    //     console.log(email)
    // }, [email])

    // useEffect(() => {
    //     console.log(senha)
    // }, [senha])

    // useCallback é uma função que vai ficar computada na memoria, 
    // guarda os valores em memoria, ou seja, o react não vai reconstruir 
    // essa função toda vez que for renderizado

    const handleEntrar = useCallback(() => {
        console.log(email, senha)
        setEmail('')
        setSenha('')
    }, [email, senha])

    return (
        <div className='d-flex justify-content-center w-100 align-items-center' style={{ height: '50vh' }}>
            <form style={{ maxWidth: '80%', width: '40%' }}>
                <p>Quantidade de caracters no e-mail: {email.length}</p>
                <p><strong>{nomeDoUsuario}</strong></p>
                <InputLogin
                    htmlFor='email'
                    id='email'
                    ref={inputEmailRef}
                    label='Email'
                    type='email'
                    value={email}
                    placeholder='Digite seu e-mail'
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputSenhaRef.current?.focus()}
                />
                <InputLogin
                    htmlFor='senha'
                    id='senha'
                    ref={inputSenhaRef}
                    label='Senha'
                    type='password'
                    placeholder='Digite sua senha'
                    value={senha}
                    onChange={newValue => setSenha(newValue)}
                    onPressEnter={() => inputEmailRef.current?.focus()}
                />

                <div className="d-flex justify-content-between">
                    <ButtonLogin className='btn btn-primary' onClick={handleEntrar} type='button'>Entrar</ButtonLogin>
                    <ButtonLogin className='btn btn-success' onClick={handleEntrar} type='button'>Cadastre-se</ButtonLogin>
                </div>
            </form>
        </div>
    )
}