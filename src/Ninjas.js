import React from 'react';



const Ninjas = (props) => {
        const{ninjas}= props;
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
                        </div> 
                    ) : null
                })
            }
            </div>

        )
    
};

export default Ninjas