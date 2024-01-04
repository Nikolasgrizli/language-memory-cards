import logo from '/vite.svg';
import { useState, useEffect } from 'react';

export default function Header(){
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
      <header>
          <img src={logo} alt="" />
          <span>Time: {now.toLocaleTimeString()}</span>
      </header>
    )
}