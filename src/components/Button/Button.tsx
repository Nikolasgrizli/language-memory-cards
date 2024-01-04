import './Button.css';

export default function Button({children, btnClick, isActive}) {
    return <button className={isActive ? 'btn btn_active' : 'btn'} onClick={btnClick}>{children}</button>
}