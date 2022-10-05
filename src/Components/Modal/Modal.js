import { useContext, useEffect, useState } from "react"
import {myContext} from "../../Context/index.js"
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";

function Modal(){
    
    var all_month = [
                    "Janeiro" ,"Fevereiro","Março",
                    "Abril" ,"Maio" ,"Junho" ,"Julho",
                    "Agosto" ,"Setembro" ,"Outubro",
                    "Novembro" ,"Dezembro"
                    ]

    var all_days = [31,24,26,34]

    var days_array = []

    const[days,setDays] = useState(days_array)

    const[m,setM] = useState(0)
    
    const[current_year,setCurrent_Year] = useState(2022)

    var current_month = all_month[m]

    useEffect(() =>{

        function LoadDays(count){
            for(var i = 0;i<count;i++){
                var a = i +1
                days_array[i] = a.toString()
            }
            setDays(days_array)
        }
        LoadDays(all_days[m])
    },[m])

    const{
        tit,settit,tex,settex,
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
                }} />

                <h1>{current_month}</h1>

                <FiArrowRight onClick={ () =>{
                    if(m >= all_month.length - 1){
                        setM(0)
                    }
                    else{
                        setM(m + 1)
                    }
                }} />

                {days.map((item) =>{
                    return(
                        <div key={item} onClick={() =>{
                            setDay(item)
                            setMonth(current_month)
                            setYear(current_year)
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