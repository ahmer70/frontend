import React, { useState } from 'react'
import SideIcon from '../asserts/anq.svg'
import { registerqulification } from '../redux/actions/userActions'
import { connect } from 'react-redux'
const Admin = ({ registerqulification }) => {


    const [Data, setData] = useState({ founder: '', mar: '', nd: "", state: '', tib: '', cp: '', industry: "" })

    const add = async () => {
        await registerqulification(Data)
    }
    return (
        <div className='container-md  mx-auto   signup d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>

            <div className='row m-0 p-0'>
                <div className='col-md-4'>
                    <img src={SideIcon} className='w-100' alt="" />
                </div>
                <div className='col-md-8'>
                    <form className=' bg-body shadow rounded p-4 w-75 mx-auto ' onSubmit={(e) => {
                        e.preventDefault()
                        add(e)

                    }}>
                        <div class="alert alert-success text-center" role="alert">
                            Add New Qualification
                        </div>
                        <div className='row '>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="founder" class="form-label">Founder:</label>
                                    <input type="text" class="form-control" id="founder" value={Data.founder} onChange={(e) => setData({ ...Data, founder: e.target.value })} aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="mar" class="form-label">Monthly Average Revenue:</label>
                                    <input type="number" min={0} class="form-control" value={Data.mar} onChange={(e) => setData({ ...Data, mar: e.target.value })} id="mar" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="state" class="form-label">State:</label>
                                    <input type="text" class="form-control" id="state" value={Data.state} onChange={(e) => setData({ ...Data, state: e.target.value })} aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="tib" class="form-label">Time in Business:</label>
                                    <input type="number" min={0} class="form-control" value={Data.tib} onChange={(e) => setData({ ...Data, tib: e.target.value })} id="tib" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="cp" class="form-label">Current Positions:</label>
                                    <input type="text" class="form-control" id="cp" value={Data.cp} onChange={(e) => setData({ ...Data, cp: e.target.value })} aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="cp" class="form-label">Negative Days:</label>
                                    <input type="text" class="form-control" id="cp" value={Data.nd} onChange={(e) => setData({ ...Data, nd: e.target.value })} aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div class="mb-3">
                                    <label for="industry" class="form-label">Industry:</label>
                                    <input type="text" class="form-control" id="industry" value={Data.industry} onChange={(e) => setData({ ...Data, industry: e.target.value })} aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-12 text-end'>

                                <button class="btn w-25" type="submit" style={{ backgroundColor: "#4152b3", color: "white" }}>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default connect(null, { registerqulification })(Admin)