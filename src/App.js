import React from "react"



function App(){

    const [formData, setFormData] = React.useState({
        email:"",
        password:"",
        passwordConfirm:"",
        joinedNewsletter:true
    })
     

    function handleChange(event){
        const {name, value, type, checked} = event.target

        setFormData(prevFormData =>({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value

        }))
    }


    console.log(formData)



    function handleSubmit(event){
         event.preventDefault()
        if(formData.password === formData.passwordConfirm){
            alert("successfully signed up")
        } else{
            alert("passwords do not match")
        }

        if(formData.joinedNewsletter){
            alert("thanks for signing up for newsletter!")
        }
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />

                <input 
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                />
                <input 
                    type="password"
                    placeholder="Confirm Password"
                    className="form-input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                    required
                />

                <div className="form-marketing">
                    <input 
                        id="okayToEmail"
                        type="checkbox" 
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    
                    />
                    <label htmlFor="okayToEmail">
                        I want to join the newsletter
                    </label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
                    
            </form>
        </div>
    )
}


export default App