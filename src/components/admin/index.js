import React, { useState, useEffect } from 'react'
import AddFounder from './AddFounder';
import Counter from './Counter'
import SideNav from './SideNav'
import { connect } from 'react-redux'

import { getAll } from '../../redux/actions/founderActions'
import DeleteModal from './DeleteModal';
import UpdateFounder from './UpdateFounder';
const AdminPanel = ({ getAll, FData }) => {
    const [show, setShow] = useState(false), [FList, setFList] = useState(false),
        [Edit, setEdit] = useState({ founder: '', mar: '', nd: "", state: '', tib: '', cp: '', industry: "", id: '' }),

        [Del, setDel] = useState(false), [EM, setEM] = useState(false);

    useEffect(() => {
        getAll()
    }, [getAll])

    useEffect(() => {
        if (FData) {
            setFList(FData)
        }
    }, [FData])

    const refresh = async () => {
        await getAll()
    }
    return (
        <div>
            <div className='row m-0 mt-2'>
                <div className='col-md-2'>
                    <SideNav />
                </div>
                <div className='col-md-10 px-3 '>
                    <div className='px-3'>
                        <Counter />
                        <div className='row m-0 border-bottom pb-2 mb-3'>
                            <button type='button' className='p-1 py-2 ms-auto border-0 rounded text-white' onClick={() => setShow(true)} style={{ backgroundColor: "#4152b3", maxWidth: "152px" }}>Add New Founder</button>
                        </div>
                        <div className='row bg-secondary m-0 px-3 mb-3'>
                            <div className='col text-white'>Founder:</div>
                            <div className='col text-white'>Average Revenue(M):</div>
                            <div className='col text-white'>State:</div>
                            <div className='col text-white'>Time in Business:</div>
                            <div className='col text-white'>Current Positions:</div>
                            <div className='col text-white'>Negative Days:</div>
                            <div className='col text-white'>Industry:</div>
                            <div className='col-1 text-white' style={{ width: "3%" }}></div>


                        </div>

                        {FList && FList.map((e) => <>
                            <div className='row m-0 dropdown-item px-3 py-1 d-flex align-items-center flist border-bottom'>

                                <div className='col'>{e.founder}</div>
                                <div className='col'>{e.average_revenue}</div>
                                <div className='col'>{e.state}</div>
                                <div className='col'>{e.time_in_businesss}</div>
                                <div className='col'>{e.current_positions}</div>
                                <div className='col'>{e.negative_days}</div>
                                <div className='col'>{e.industry}</div>
                                <div className='col-1' style={{ width: "3%" }}>
                                    <div class="dropdown ">
                                        <button class="btn border-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical " viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu ">

                                            <li class="dropdown-item" onClick={() => {
                                                setEM(true)
                                                setEdit({
                                                    founder: e.founder,
                                                    mar: e.average_revenue,
                                                    nd: e.negative_days,
                                                    state: e.state,
                                                    tib: e.time_in_businesss,
                                                    cp: e.current_positions,
                                                    industry: e.industry,
                                                    id: e.id
                                                })
                                            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil me-2" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                </svg>Edit</li>

                                            <li class="dropdown-item" onClick={() => setDel(e.id)} data-bs-toggle="modal" data-bs-target="#deletemodal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash me-2" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>Delete</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>)}


                    </div>
                </div>
            </div>

            <AddFounder show={show} setShow={(e) => setShow(e)} refresh={(e) => refresh(e)} />
            <DeleteModal Del={Del} refresh={(e) => refresh(e)} />
            <UpdateFounder EM={EM} setEM={(e) => setEM(e)} Edit={Edit} setEdit={(e) => setEdit(e)} refresh={(e) => refresh(e)} />
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        FData: state.founder.list
    }
}

export default connect(mapStateToProps, { getAll })(AdminPanel)