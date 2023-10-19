import React, {useState} from 'react';
import Button from "../Button/Button";
import './Header.css';
import {useTelegram} from "../../hooks/useTelegram";
import FormButton from "../FormButton/FormButton";

const Header = () => {
    const {user, onClose} = useTelegram();
    const [isOpen, setOpen] = useState();
    return (
        <header className="header">
            <span className="header__name">libcom</span>
            <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-item">Main</li>
                    <li className="header__nav-item">About</li>
                    <li className="header__nav-item">Adress</li>
                    <li className="header__nav-item">Contact</li>
                    <li className="header__nav-item">Login</li>
                </ul>
            </nav>
            <button className="header__menu-button" onClick={()=> setOpen(!isOpen)}>
                Меню
            </button>
        </header>
    );
};

export default Header;