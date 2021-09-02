import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    //Esta funcion es para evitar que todo el navegador haga un refresh al hacer submit del formulario
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if (inputValue.trim().length>2){
            setCategories(c =>[...c, inputValue]);
            setInputValue("");

        }

    }
    
    return (
        <form onSubmit= {handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>
    )
};
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}