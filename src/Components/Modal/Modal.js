import { useContext, useEffect, useState } from "react"
import {myContext} from "../../Context/index.js"
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";

function Modal(){

    const{
        tit,settit,tex,settex,
        setDay,setMonth,setYear,
        AddDoc,setActiveModal
    } = useContext(myContext);

    const date = new Date();

    var all_month = [
                    "Janeiro" ,"Fevereiro","Março",
                    "Abril" ,"Maio" ,"Junho" ,"Julho",
                    "Agosto" ,"Setembro" ,"Outubro",
                    "Novembro" ,"Dezembro"
                    ]

    var all_days = [31,24,26,34,20,11,27,22,14,21,30,29]

    var days_array = []

    const[days,setDays] = useState(days_array)

    const[m,setM] = useState(0)

    const[current_year,setCurrent_Year] = useState(date.getFullYear())

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
                        setMonth(all_month.length - 1)
                    }
                    else{
                        setM(m - 1)
                    }
                }} />

                <h1>{current_month}</h1>

                <FiArrowRight onClick={ () =>{
                    if(m >= all_month.length){
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
                
                    settit("");
                    settex("");

                    setDay();
                    setMonth();
                    setYear(2022);

                    console.log(date.getMonth() + 1)
                }}>
                    Cancelar
                </button>

                <button onClick={ () =>{
                    setActiveModal(false)
                    AddDoc();
                    setDay();
                    setMonth();
                    setYear(2022)
                }}>
                    Adicionar
                </button>
            </div>
            
        </div>
    )

}

export default Modal