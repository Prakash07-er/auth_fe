import { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { click } from "@testing-library/user-event/dist/click"

export default function Signin() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [count, setCount] = useState(0)
    const [value, SetValue] = useState({})
    const [title, setTitle] = useState("")


    const registerSubmit = async(e) => {
        e.preventDefault()
        try {
            const data = await axios.post('https://authentication-mern-stack.herokuapp.com/signin', {
                email,
                password
            })
            console.log("SUcccess", data)
            history.push("/")
        } catch (error) {
            console.log("error")
        }

    }

    useEffect( async() => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(res)
        SetValue(res.data)
        setTitle(res.data.title)
    },[])



    const clickButton = () => {
        setCount(count + 1)
    }

    return(
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">   
                    <div class="card-content white-text">
                     <span class="card-title">Sign In</span>
                        <div class="input-field">
                            <label for="last_name">Email</label>
                            <input id="last_name" type="email" placeholder="enter email" class="validate" 
                             value={email} onChange= { (e) => setEmail(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <label for="last_name">password</label>
                            <input id="last_name" type="password" placeholder="enter password" class="validate"  
                             value={password} onChange= { (e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div class="card-action">
                     <button class="waves-effect waves-light btn" onClick={registerSubmit} >Signin</button>
                    </div>
                    <h3> You clicked this {count} times</h3>
                    <h4> {JSON.stringify(value)} </h4>
                    <h4> {title} </h4>
                    <div class="card-action">
                     <button class="waves-effect waves-light btn" onClick={clickButton} >Click me</button>
                    </div>
                </div>
            </div>
         </div>
    )
}