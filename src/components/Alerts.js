import React from 'react'

const Alerts = ({ data }) => {
    return (
        <div>
            <div
                dangerouslySetInnerHTML={{ __html: data }}
            />
        </div>
    )
}

export default Alerts