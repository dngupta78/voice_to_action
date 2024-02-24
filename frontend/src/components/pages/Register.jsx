import React, { useState } from 'react'
import './Register.css'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "../../api/axios"

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNum] = useState();
  const [password, setPwd] = useState();
  const [confirmPassword, setConfirmPwd] = useState();
  const [dob, setDob] = useState();
  const [age, setAge] = useState();
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pinCode, setPinCode] = useState();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        dOB: dob,
        age: age,
        address: {
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            pinCode: pinCode
        }
    }
    const header = {
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.post('/register',
            data,
           {
               headers: header
           });
           console.log(response)
    } catch (err) {
        console.log("error: ", err)
    }
    
  }
  return (
    <div >
        <div className='register-body'>
        <h1 style={{"color": "navy"}}>Registrat</h1>
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                
                <div>
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <PhoneInput
                        className="number input-phone"
                        country={"in"}
                        value={phoneNumber}
                        onChange={setPhoneNum}
                        required
                    />
                </div>
                <div>
                    <input
                        type='password'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='password'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label class="form-label" for="form2Example2" style={{"color": "navy"}}>
                    Date Of Birth
                    </label>
                    <input
                    type="date" 
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                    required
                    />
                </div>
                <div>
                    <input
                        type='number'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Address Line1'
                        value={line1}
                        onChange={(e) => setLine1(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Address Line1'
                        value={line2}
                        onChange={(e) => setLine2(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        autoComplete="off"
                        className='input-field'
                        placeholder='State'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='number'
                        autoComplete="off"
                        className='input-field'
                        placeholder='Pin Code'
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit" className='register-button' >
                        Register
                    </button>
                </div>
            </form>
        </section>
    </div>
    </div>
  )
}

export default Register