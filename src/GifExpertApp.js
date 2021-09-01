//rafc es para crear el cascaron del componente
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["Naruto", "Bleach", "One Piece"]);
    
    /* const handleAdd =()=>{
        
        //hay 2 maneras correctas
        //setCategories([...categories, "HunterXHunter"])
        //setCategories(c =>[...c, "HunterXHunter"]);
        
    }*/
    return (
        <>
           <h2>Gif Expert App</h2> 
           <AddCategory />
           <hr />
           
           <ol>
               {
                   categories.map(category =>{
                       return <li key={category} >{category}</li>
                   })
               }
           </ol>
        </>
    )
}

export default GifExpertApp;
