import { useContext, useEffect, useState } from "react"
import {myContext} from "../../Context/index.js"
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";

function Modal(){

    var all_month = ["janeiro" ,"fevereiro","Março",
                    "Abril" ,"Maio" ,"junho" ,"Julho",
                    "Agosto" ,"Setembro" ,"Outubro",
                    "Novembro" ,"Dezembro"]

    const[current_year,setCurrent_Year] = useState(2022)
    
    const[m,setM] = useState(0)

    var current_month = all_month[m]

    var days = ["1","2","3"]

    const{
        tit,settit,tex,settex,year,month,day,
        setDay,setMonth,setYear,
        AddDoc,setActiveModal
    } = useContext(myContext);

    return(
        <div>
            <div>
            <label> Titulo </label>
            <input placeholder="Digite o Titulo" 
                value={tit} 
                onChange={(e) => {settit(e.target.value)}}
            />

            <label> Texto </label>
            <input placeholder="Digite o Texto" 
                value={tex} 
                onChange={(e) => {settex(e.target.value)}}
            />
            </div>
            <div>

                <FiArrowLeft onClick={ () =>{
                    if(m <= 0){
                        setM(all_month.length - 1)
                    }
                    else{
                        setM(m - 1)
                    }
                    console.log(m)
                }} />

                <h1>{current_month}</h1>

                <FiArrowRight onClick={ () =>{
                    
                    if(m >= all_month.length - 1){
                        setM(0)
                    }
                    else{
                        setM(m + 1)
                    }

                    console.log(m)
                }} />

                {days.map((item,index) =>{
                    return(
                        <div key={index} onClick={() =>{
                            setDay(item)
                            setMonth(current_month)
                            setYear(current_year)
                            console.log("Day " + day)
                            console.log( "Month " + month)
                            console.log("Year " + year)
                        }}>
                            <h3>{item}</h3>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={ () =>{
                    setActiveModal(false)
                }}>
                    Cancelar
                </button>

                <button onClick={ () =>{
                    setActiveModal(false)
                    AddDoc();
                }}>
                    Adicionar
                </button>
            </div>
            
        </div>
    )

}

export default Modal