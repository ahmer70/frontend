import React, { useState, useEffect } from "react";

import { getAll } from "../redux/actions/founderActions";
import { registerrespponse } from "../redux/actions/users_responseActions";
import { connect } from "react-redux";
import Query from './Query';
import Display from './Display';
const Apply = ({ getAll, registerrespponse, userData }) => {
    const [Data, setData] = useState({
        dn: "",
        mar: "",
        nd: "",
        state: "",
        tib: "",
        cp: "",
        industry: "",
    }),
        [List, setList] = useState(false),
        [State, setState] = useState(false);
    console.log("Data", userData)
    useEffect(() => {
        getAll();
    }, [getAll]);

    useEffect(() => {
        if (userData) {
            setList(userData);
        }
    }, [userData]);

    const add = async () => {
        // await registerqulification(Data)

        setState(true)
        await registerrespponse(Data)
    };

    let filt = List && List.filter((e) => (e.average_revenue).toString() === Data.mar
        && (e.state).toString() === Data.state
        && (e.time_in_businesss).toString() === Data.tib
        && (e.current_positions).toString() === Data.cp
        && (e.negative_days).toString() === Data.nd &&
        (e.industry).toString() === Data.industry
    )

    return (
        <div
            className="container-md  mx-auto   signup d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            {!State && <Query List={List} Data={Data} setData={(e) => setData(e)} add={(e) => add(e)} />}
            {State && <Display setState={(e) => setState(e)} filt={filt} Data={Data} List={List} />}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        userData: state.founder.list,
    };
};

export default connect(mapStateToProps, { getAll, registerrespponse })(Apply);
