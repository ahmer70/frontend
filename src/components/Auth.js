import React, { useState } from 'react'
import BGIcon from '../asserts/sbg.svg'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Alerts from './Alerts';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const [Data, setData] = useState({ fname: '', lname: "", email: "", password: "" });
    const [Sign, setSign] = useState('signin'), [Message, setMessage] = useState(false)
    const [Login, setLogin] = useState({ email: "", password: "" }), [Err, setErr] = useState(false);
    const history = useNavigate()
    const getLogin = async () => {
        await api.get('/users/login', { params: Login })
            .then(res => {
                if (res.data) {
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token)
                        history('/apply')

                    } else if (res.data.error) {
                        setErr(`<div class="alert alert-danger  alert-dismissible fade show" role="alert">
                        ${res.data.error}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`)
                    }
                }
            })
            .catch(err => console.log("err", err.message))
    }

    if (Err) {
        setInterval(function () {
            setErr(false)
        }, 2000);

    }
    const register = async (e) => {
        if (Data) {
            await api.put("/users/register", Data)
                .then(res => {

                    if (res.data.user) {
                        setMessage(`<div class="alert alert-success  alert-dismissible fade show" role="alert">
                        <strong>Congratulation!</strong> Your account has been created.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`)
                        setData({ fname: '', lname: "", email: "", password: "" })

                    }
                    // history(`/message/${Reg.email}`)
                })
                .catch(err => console.log("error", err.message))
        }



    }

    if (Message) {
        setInterval(function () {
            setMessage(false)
        }, 4000);
    }
    return (
        <div className='container-md mx-auto   signup d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>


            <div className='row bg-body shadow mobile-mode rounded w-100 p-0 mx-auto'>
                <div className='col-md-6 p-0 m-0  '>
                    <div className=' sidedsign mx-auto position-relative '>
                        <img src={BGIcon} className='w-100  mx-auto h-100 d-flex align-items-center justify-content-center' alt="" />
                    </div>
                </div>
                <div className='col-md-6  d-flex align-items-center justify-content-center'>
                    <div className='position-relative '>
                        {Message && <Alerts data={Message} />}
                        {Err && <Alerts data={Err} />}
                        <p className='d-flex shadow-sm   rounded-pill p-0 ' style={{ maxWidth: "200px", border: "1px solid #4152b3", fontSize: "14px" }}>
                            <button type='button' className={`rounded-pill w-100   border-0  ${Sign === 'signin' ? "btnCA btns fadeInRight " : "btnC"}`} onClick={(e) => setSign('signin')}>Sign In</button>
                            <button type='button' className={`rounded-pill w-100 border-0 ${Sign === 'signup' ? "btnCA btns fadeInLeft" : "btnC"}`} onClick={(e) => setSign('signup')}>Sign Up</button>
                        </p>

                        {Sign === 'signin' && <SignIn getLogin={(e) => getLogin(e)} Login={Login} setLogin={(e) => setLogin(e)} />}
                        {Sign === 'signup' && <SignUp Data={Data} setData={(e) => setData(e)} register={(e) => register(e)} />}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Auth