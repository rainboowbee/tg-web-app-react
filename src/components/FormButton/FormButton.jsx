import React from 'react';
import './FormButton.css';

const FormButton = (props) => {
    return (
        <button {...props} className={'button' + props.className}/>
    );
};

export default FormButton;