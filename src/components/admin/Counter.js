import React, { useEffect } from 'react'
import './counter.css'
import { Link } from 'react-router-dom'
import { getAllCount } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
const Counter = ({ getAllCount, Counter }) => {

    useEffect(() => {
        getAllCount()
    }, [getAllCount])
    console.log("Counter", Counter)
    return (
        <div class="container">
            <div class="row mx-auto">
                <div class="col-lg-4 mx-auto col-sm-6">
                    <div class="card-box rounded bg-blue">
                        <div class="inner">
                            <h3> {Counter && Counter.response && <>{Counter.response < 10 ? <>0{Counter.response}</> : <>{Counter.response}</>}</>} </h3>
                            <p> Response </p>
                        </div>
                        <div class="icon">

                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <Link to="/response_list" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>


                <div class="col-lg-4 mx-auto col-sm-6">
                    <div class="card-box rounded bg-orange">
                        <div class="inner">
                            <h3> {Counter && Counter.founder && <>{Counter.founder < 10 ? <>0{Counter.founder}</> : <>{Counter.founder}</>}</>} </h3>
                            <p> Founder </p>
                        </div>
                        <div class="icon">
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </div>
                        <Link to="/admin_panel" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
                <div class="col-lg-4 mx-auto col-sm-6">
                    <div class="card-box rounded bg-red">
                        <div class="inner">
                            <h3> {Counter && Counter.user && <>{Counter.user < 10 ? <>0{Counter.user}</> : <>{Counter.user}</>}</>} </h3>
                            <p> Users </p>
                        </div>
                        <div class="icon">
                            <i class="fa fa-users"></i>
                        </div>
                        <Link to="/users_list" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Counter: state.user.data
    }
}

export default connect(mapStateToProps, { getAllCount })(Counter)