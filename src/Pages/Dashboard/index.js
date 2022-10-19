import { useContext, useEffect, useState } from "react"
import {myContext} from "../../Context/index.js"
import {BiPlus} from "react-icons/bi"
import Modal from "../../Components/Modal/Modal.js";

function ListaDeDados(){

    const
    {
        list,setList,CarregarDados,
        Delete,Modify,activeModal,
        setActiveModal

    } = useContext(myContext);

    useEffect(() =>{
        
        CarregarDados()                     
    
    })

    return(
        <div className="Home">

            <h1>List</h1>

            <div className="Names">
                <h2>Task Name</h2>
                <h3>Day</h3>
                <h3>Month</h3>
                <h3>Year</h3>
            </div>
            <div>
                {list.map((item,index) =>{
                    return(
                        <div className="Data" key={index}>
                            <h2>{item.titulo}</h2>

                            <h3>{item.day}</h3>
                            <h3>{item.month}</h3>
                            <h3>{item.year}</h3>

                            <button onClick={ () =>{
                                Delete(item.id)
                            }}>
                                <p>Delete</p>
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