import { useContext, useEffect, useState } from "react"
import {myContext} from "../../Context/index.js"
import {BiPlus} from "react-icons/bi"
import Modal from "../../Components/Modal/Modal.js";

function ListaDeDados(){

    const
    {
        list,setList,CarregarDados,
        Delete,Modify,activeModal,setActiveModal

    } = useContext(myContext);

    useEffect(() =>{
        
        CarregarDados()                     
    
    })

    return(
        <div>
            <h1>Lista</h1>
           
            <div>
                {list.map((item,index) =>{
                    return(
                        <div key={index}>
                            <h2>{item.titulo}</h2>
                            <p>{item.texto}</p>

                            <h3>{item.day}</h3>
                            <h3>{item.month}</h3>
                            <h3>{item.year}</h3>

                            <button onClick={ () =>{

                                Delete(item.id)    
                            }}>
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>

            <div>
                
                <BiPlus onClick={ () =>{
                    
                    setActiveModal(true)

                }}/>
            </div>

            {activeModal ? 
                <div>
                    <Modal/>
                </div> 
                : 
                <div>
                
                </div>
            }

        </div>
    )

}

export default ListaDeDados