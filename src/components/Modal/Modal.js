import { useState } from 'react';
import './modal.css';

export function Modal(props) {
    const [active, setActive] = useState(false);
    console.log(active)

 
    return (
        <div>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>  
            {props.children}
            </div>
            <button onClick={(e) => setActive(prev => !prev)}>Open modal</button>
        </div>
    )
}