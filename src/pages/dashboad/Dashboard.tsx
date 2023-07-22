import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    const counterRef = useRef({counter: 0});

    return (
        <div>
            <p>Página de Dashboard.</p>
            <p>Contador: {counterRef.current.counter}</p>
            <button className='btn btn-success' onClick={ ()=> counterRef.current.counter++ }>Somar</button>
            <br />
            <br />
            <button className='btn btn-success' onClick={ ()=> console.log(counterRef.current.counter++) }>Console</button>
            <br />
            <br />
            <Link to ="/entrar">Login</Link>
        </div>
    )
}