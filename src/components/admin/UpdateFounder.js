import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { updateFounder } from '../../redux/actions/founderActions';
import { connect } from 'react-redux';
const UpdateFounder = ({ EM, setEM, refresh, Edit, setEdit, updateFounder }) => {


    const add = async () => {
        await updateFounder(Edit)

        refresh()
        setEM(false)
    }
    return (
        <>


            <Offcanvas show={EM} onHide={() => setEM(false)} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add New Founder</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <form className='  ' onSubmit={(e) => {
                        e.preventDefault()
                        add(e)


                    }}>


                        <div class="mb-3">
                            <label for="founder" class="form-label">Founder:</label>
                            <input type="text" class="form-control" id="founder" value={Edit.founder} onChange={(e) => setEdit({ ...Edit, founder: e.target.value })} aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="mar" class="form-label">Monthly Average Revenue:</label>
                            <input type="number" min={0} class="form-control" value={Edit.mar} onChange={(e) => setEdit({ ...Edit, mar: e.target.value })} id="mar" aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="state" class="form-label">State:</label>
                            <input type="text" class="form-control" id="state" value={Edit.state} onChange={(e) => setEdit({ ...Edit, state: e.target.value })} aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="tib" class="form-label">Time in Business:</label>
                            <input type="number" min={0} class="form-control" value={Edit.tib} onChange={(e) => setEdit({ ...Edit, tib: e.target.value })} id="tib" aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="cp" class="form-label">Current Positions:</label>
                            <input type="text" class="form-control" id="cp" value={Edit.cp} onChange={(e) => setEdit({ ...Edit, cp: e.target.value })} aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="cp" class="form-label">Negative Days:</label>
                            <input type="text" class="form-control" id="cp" value={Edit.nd} onChange={(e) => setEdit({ ...Edit, nd: e.target.value })} aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="industry" class="form-label">Industry:</label>
                            <input type="text" class="form-control" id="industry" value={Edit.industry} onChange={(e) => setEdit({ ...Edit, industry: e.target.value })} aria-describedby="emailHelp" />
                        </div>

                        <div className='col-12 text-end'>

                            <button class="btn w-25" type="submit" style={{ backgroundColor: "#4152b3", color: "white" }}>Submit</button>
                        </div>


                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default connect(null, { updateFounder })(UpdateFounder)

