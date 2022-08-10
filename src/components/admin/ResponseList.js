import React, { useState, useEffect } from 'react'
import AddFounder from './AddFounder';
import Counter from './Counter'
import SideNav from './SideNav'
import { connect } from 'react-redux'

import { getAll } from '../../redux/actions/users_responseActions'

const ResponseList = ({ getAll, URData }) => {
    const [UList, setUList] = useState(false);


    useEffect(() => {
        getAll()
    }, [getAll])
    useEffect(() => {
        if (URData) {
            setUList(URData)
        }
    }, [URData])

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

                        <div className='row rounded bg-secondary m-0  p-3 mb-3'>
                            <div className='col text-white'>SR:</div>

                            <div className='col text-white'>Name:</div>
                            <div className='col text-white'>Email:</div>
                            <div className='col text-white'>Deal Name:</div>

                        </div>

                        {UList && UList.map((e, index) => <>
                            <div className='row m-0 rounded rounded dropdown-item px-3 py-1 d-flex align-items-center flist border-bottom'>
                                <div className='col'>{index + 1}</div>

                                <div className='col'>{e.user && e.user.f_name} {e.user && e.user.l_name}</div>
                                <div className='col'>{e.user && e.user.email}</div>
                                <div className='col'>{e.deal_name}</div>


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
        URData: state.response.list
    }
}

export default connect(mapStateToProps, { getAll })(ResponseList)



