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
            setCategories(c =>[ inputValue, ...c]);
            setInputValue("");

        }

    }
    
    return (
        <>
            <div id="buscar-input">
                <form onSubmit= {handleSubmit}>
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    ></input>
                </form> 

            </div>
            <div id="buscar-logo">
                 <img src="https://giphy.com/static/img/search-icon.svg" alt=""></img> 
            </div>
        
        
        </>
    
    )
};
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}