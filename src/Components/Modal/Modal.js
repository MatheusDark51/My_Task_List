import { useContext, useEffect, useState } from "react"
import {myContext} from "../../Context/index.js"
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import  "../../StylesSheets/style.css"

function Modal(){

    const{
        tit,settit,
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

    var all_days = [31,29,31,30,31,30,31,31,30,31,30,31,]

    var days_array = []

    const[current_days,setCurrent_Days] = useState(days_array)

    const[current_Month,setCurrent_Month] = useState(date.getMonth())

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
        <section className="Neon">
            <div className="Modal">
                <div className="Text">
                    <label for="text" > Titulo </label>
                    <input maxLength={30} type="text" id="text" placeholder="Digite o Titulo da Tarefa" 
                        value={tit} 
                        onChange={(e) => {settit(e.target.value)}}
                    />
                </div>

                <div>
                    
                    <div>
                        
                        <h3 className="Font">{current_Year}</h3>

                    </div>

                    <div className="Size-Text">
                            
                        <FiArrowLeft className="Arrow" onClick={ () =>{
                            if(current_Month <= 0){
                                setCurrent_Month(all_month.length - 1)
                                setCurrent_Year(current_Year - 1)
                            }
                            else{
                                setCurrent_Month(current_Month - 1)
                            }
                        }} />

                        <h1 className="Font">{month_to_render}</h1>

                        <FiArrowRight className="Arrow" onClick={ () =>{
                            
                            if(current_Month >= all_month.length - 1){
                                setCurrent_Month(0)
                                setCurrent_Year(current_Year + 1)
                            }
                            else{
                                setCurrent_Month(current_Month + 1)
                            }
                        }} />

                    </div>

                    <div className="Calendar">
                        {current_days.map((item) =>{
                            return(
                                <div id="test" key={item} onClick={() =>{
                                    setDay(item)
                                    setMonth(month_to_render)
                                    setYear(current_Year)
                                    }}>
                                    <h3>{item}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>

               <div className="Buttons Neon">
                    <button className="Neon" onClick={ () =>{
                        setActiveModal(false)
                    
                        settit("");

                        setDay();
                        setMonth();
                        setYear();

                    }}>

                       <p>Cancelar</p>

                    </button>

                    <button className="Neon" onClick={ () =>{
                        setActiveModal(false)

                        AddDoc();
                        
                    }}>

                        <p>Adicionar</p>
                        
                    </button>
                </div>
            </div>
        </section>
    )

}

export default Modal