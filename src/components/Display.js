import React from 'react'

const Display = ({ Data, List, setState }) => {
    return (
        <div className="container-md  mx-auto   signup d-flex align-items-center justify-content-center"
        >
            <div className='bg-body shadow rounded p-4 w-75 mx-auto'>

                <div class="alert alert-primary" role="alert">
                    <h4 className='text-capitalize'>Deal Name:{Data.dn}</h4>
                </div>
                <div className='row mx-auto border'>

                    <div className='col-md-6' style={{ borderBottom: "1px solid #dee2e6" }}>
                        <h5 className='text-center'>Qualified</h5>
                    </div>
                    <div className='col-md-6 ' style={{ borderBottom: "1px solid #dee2e6" }}>
                        <h5 className='text-center'>Disqualified</h5>
                    </div>
                    {List.map((e) => (e.average_revenue).toString() === Data.mar
                        && (e.state).toString() === Data.state
                        && (e.time_in_businesss).toString() === Data.tib
                        && (e.current_positions).toString() === Data.cp
                        && (e.negative_days).toString() === Data.nd &&
                        (e.industry).toString() === Data.industry ? <div className='col-md-6   ' style={{ borderRight: "1px solid #dee2e6" }}>
                        <li className='text-start'>{e.founder}</li>
                    </div>
                        : <div className='col-md-6 '>
                            <li className='text-start'>{e.founder}</li>
                        </div>

                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Display