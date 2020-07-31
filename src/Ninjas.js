import React from 'react';

import './ninjas.css';



const Ninjas = (props) => {
        const{ninjas, deleteNinja}= props;
        //const ninjaList = ninjas.map(ninja => {
            //     if (ninja.age > 20) {
            //     return(
            //         <div className="ninja" key={ninja.id}>
            //         <div>name:{ninja.name}</div>
            //         <div>age: {ninja.age}</div>
            //         <div>belt: {ninja.belt}</div>
            //     </div>
            //     )
            //     } else {
            //         return null
            //     }
                
            // }
            // )
        const ninjaList = ninjas.map(ninja => {
           return ninja.age > 20?(
                <div className="ninja" key={ninja.id}>
                    <div>name:{ninja.name}</div>
                    <div>age: {ninja.age}</div>
                 <div>belt: {ninja.belt}</div>
               </div> 
            ) : null
        })
        return (
            <div className="ninja-list" >
            {
                ninjas.map(ninja => {
                    return ninja.age > 20?(
                        <div className="ninja" key={ninja.id}>
                            <div>name:{ninja.name}</div>
                            <div>age: {ninja.age}</div>
                            <div>belt: {ninja.belt}</div>
                            <button onClick={()=>{deleteNinja(ninja.id)}} >Delete Ninja</button>
                        </div> 
                    ) : null
                })
            }
            </div>

        )
    
};

export default Ninjas