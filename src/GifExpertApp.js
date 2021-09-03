//rafc es para crear el cascaron del componente
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["Golden retriever"]);
    
    
    return (
        <>
           <header id="header">
           <img className="animate__animated animate__bounceInDown" src="https://cdn.worldvectorlogo.com/logos/giphy-logo-1.svg" alt=""></img>
                <h1 className="animate__animated animate__tada">GIPHY</h1> 
           </header>

           <menu id="buscar">
                <AddCategory setCategories={setCategories}/>
            </menu>
           
           <hr />
           
           {<section className="section">
               <ol>
                    {
                        categories.map(category => <GifGrid key={category} category={category}/> )
                    }
                </ol> 
            </section>}

            
           
        </>
    )
}

export default GifExpertApp;
