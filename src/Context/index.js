import { createContext } from "react";
import { useState } from "react";
import firebase from "../Services/FirebaseConection"

export const myContext = createContext()

function UserContext({children}){

    const[activeModal,setActiveModal] = useState(false)

    const[list,setList] = useState([])

    const[tit,settit] = useState("")

    const[day,setDay] = useState("")
    const[month,setMonth] = useState("")
    const[year,setYear] = useState("")

    async function CarregarDados(){
        await firebase.firestore().collection("Tasks")
        .get()
        .then((result) => {
            var l = []
            var i = 0
            result.forEach((docs) =>{
                l[i] = {
                    id:docs.id,
                    titulo:docs.data().Titulo,
                    day:docs.data().Day,
                    month:docs.data().Month,
                    year:docs.data().Year
                }
                i++
            })
            l.sort((a, b) => a.titulo.localeCompare(b.titulo))
            setList(l)
            
        }).catch((err) => {
            console.log(err)                
        });
    }

    async function AddDoc(){
        if(tit ==="" || day === ""){
            console.log("Insira um texto valido")
        }
        else{
            await firebase.firestore().collection("Tasks")
            .add({
                Titulo:tit,

                Day:day,
                Month:month,
                Year:year
                
            })
            setDay("")
            setMonth("")
            setYear("")

            settit("")
        }
    }

    async function Delete(id) {
        await firebase.firestore().collection("Tasks")
        .doc(id)
        .delete()
    }

    return(
        <myContext.Provider 
        value=
        {{
            list,setList,tit,settit,
            day,setDay,month,setMonth,year,setYear,
            CarregarDados,AddDoc,Delete,
            activeModal,setActiveModal
        }}>

            {children}

        </myContext.Provider>
    )
}

export default UserContext