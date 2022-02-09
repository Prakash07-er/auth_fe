import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"


export default function Signup() {
    const history = useHistory()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerSubmit = async(e) => {
        e.preventDefault()
        try {
            const data = await axios.post('https://authentication-mern-stack.herokuapp.com/signup', {
                username,
                email,
                password
            })
            console.log("SUcccess", data)
            history.push('/signin')
        } catch (error) {
            console.log("error")
        }

    }

    return (  
         <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                     <span class="card-title">Sign up</span>
                        <div class="input-field">
                            <label for="last_name">Name</label>
                            <input id="last_name" type="text" placeholder="enter name" class="validate" 
                            value={username} onChange={(e) => setUserName(e.target.value)} />
                        </div>
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
                     <button class="waves-effect waves-light btn" onClick={registerSubmit} >Signup</button>
                    </div>
                </div>
            </div>
         </div>

    )
}