import React, { useState, useEffect } from 'react'
import AddFounder from './AddFounder';
import Counter from './Counter'
import SideNav from './SideNav'
import { connect } from 'react-redux'

import { getAll } from '../../redux/actions/userActions'

const UserList = ({ getAll, UData }) => {
    const [UList, setUList] = useState(false);


    useEffect(() => {
        getAll()
    }, [getAll])

    useEffect(() => {
        if (UData) {
            setUList(UData)
        }
    }, [UData])

    const refresh = async () => {
        await getAll()
    }
    return (
        <div>
            <div className='row m-0 mt-2'>
                <div className='col-md-2'>
                    <SideNav />
                </div>
                <div className='col-md-10 px-3 mt-2 '>
                    <div className='px-3'>

                        <div className='row rounded bg-secondary m-0 p-3  mb-3'>
                            <div className='col text-white'>SR:</div>

                            <div className='col text-white'>First Name:</div>
                            <div className='col text-white'>Last Name:</div>
                            <div className='col text-white'>Email</div>

                        </div>

                        {UList && UList.map((e, index) => <>
                            <div className='row m-0 rounded dropdown-item px-3 py-1 d-flex align-items-center flist border-bottom'>
                                <div className='col'>{index + 1}</div>

                                <div className='col'>{e.f_name}</div>
                                <div className='col'>{e.l_name}</div>
                                <div className='col'>{e.email}</div>


                            </div>
                        </>)}


                    </div>
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        UData: state.user.list
    }
}

export default connect(mapStateToProps, { getAll })(UserList)

