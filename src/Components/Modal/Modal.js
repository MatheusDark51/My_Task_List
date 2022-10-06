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

    const[current_days,setCurrent_Days] = useState(days_array)

    const[current_Month,setCurrent_Month] = useState(0)

    const[current_Year,setCurrent_Year] = useState(date.getFullYear())

    var month_to_render = all_month[current_Month]

    useEffect(() =>{

        function LoadDays(count){
            for(var i = 0;i<count;i++){
                var a = i +1
                days_array[i] = a.toString()
            }
            setCurrent_Days(days_array)
        }
        LoadDays(all_days[current_Month])
    },[current_Month])

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
                    if(current_Month <= 0){
                        setCurrent_Month(all_month.length - 1)
                    }
                    else{
                        setCurrent_Month(current_Month - 1)
                    }
                }} />

                <h1>{month_to_render}</h1>

                <FiArrowRight onClick={ () =>{
                    
                    if(current_Month >= all_month.length - 1){
                        setCurrent_Month(0)
                        
                    }
                    else{
                        setCurrent_Month(current_Month + 1)
                    }
                }} />

                {current_days.map((item) =>{
                    return(
                        <div key={item} onClick={() =>{
                            setDay(item)
                            setMonth(current_Month)
                            setYear(current_Year)
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
                }}>
                    Cancelar
                </button>

                <button onClick={ () =>{
                    setActiveModal(false)

                    AddDoc();

                    setDay();
                    setMonth();
                    setYear(2022);
                }}>
                    Adicionar
                </button>
            </div>
            
        </div>
    )

}

export default Modal