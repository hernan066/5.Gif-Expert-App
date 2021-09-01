import React, { useState } from 'react'

export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    //Esta funcion es para evitar que todo el navegador haga un refresh al hacer submit del formulario
    const handleSubmit = (e)=>{
        e.preventDefault();
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
