import React from 'react';
import Button from "../Button/Button";
import './Header.css';
import {useTelegram} from "../../hooks/useTelegram";
import FormButton from "../FormButton/FormButton";

const Header = () => {
    const {user, onClose} = useTelegram();
    

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <FormButton>Заполнить форму</FormButton>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;