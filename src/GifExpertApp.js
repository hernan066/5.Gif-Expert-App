//rafc es para crear el cascaron del componente
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["Naruto"]);
    
    /* const handleAdd =()=>{
        
        //hay 2 maneras correctas
        //setCategories([...categories, "HunterXHunter"])
        //setCategories(c =>[...c, "HunterXHunter"]);
        
    }*/
    return (
        <>
           <h2>Gif Expert App</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr />
           
           { <ol>
               {
                   categories.map(category => <GifGrid key={category} category={category}/> )
               }
           </ol> }
        </>
    )
}

export default GifExpertApp;
