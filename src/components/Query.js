import React from 'react'

const Query = ({ Data, setData, add, List }) => {
    return (
        <div>
            <form
                className=" bg-body shadow rounded p-4 w-75 mx-auto "
                onSubmit={(e) => {
                    e.preventDefault();
                    add(e);
                }}
            >
                <div class="alert alert-success text-center" role="alert">
                    Add New Qualification
                </div>
                <div className="row ">
                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="founder" class="form-label">
                                Deal Name:
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="founder"
                                value={Data.dn}
                                onChange={(e) => setData({ ...Data, dn: e.target.value })}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="industry" class="form-label">
                                Industry:
                            </label>
                            <select
                                class="form-select"
                                id="industry"
                                value={Data.industry}
                                onChange={(e) => setData({ ...Data, industry: e.target.value })}
                                aria-label="Default select example"
                                required
                            >
                                <option selected value="">
                                    Select
                                </option>
                                {List &&
                                    List.map((e) => (
                                        <>
                                            <option value={e.industry}>{e.industry}</option>
                                        </>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="tib" class="form-label">
                                Time in Business:
                            </label>
                            <select
                                class="form-select"
                                id="tib"
                                value={Data.tib}
                                onChange={(e) => setData({ ...Data, tib: e.target.value })}
                                aria-label="Default select example"
                                required
                            >
                                <option selected value="">
                                    Select
                                </option>
                                {List &&
                                    List.map((e) => (
                                        <>
                                            <option value={e.time_in_businesss}>
                                                {">"} {e.time_in_businesss} Years
                                            </option>
                                        </>
                                    ))}
                            </select>{" "}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="state" class="form-label">
                                State:
                            </label>
                            <select
                                class="form-select"
                                id="state"
                                value={Data.state}
                                onChange={(e) => setData({ ...Data, state: e.target.value })}
                                aria-label="Default select example"
                                required
                            >
                                <option selected value="">
                                    Select
                                </option>
                                {List &&
                                    List.map((e) => (
                                        <>
                                            <option value={e.state}>{e.state}</option>
                                        </>
                                    ))}
                            </select>{" "}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="mar" class="form-label">
                                Monthly Average Revenue:
                            </label>
                            <select
                                class="form-select"
                                id="mar"
                                value={Data.mar}
                                onChange={(e) => setData({ ...Data, mar: e.target.value })}
                                aria-label="Default select example"
                                required
                            >
                                <option selected value="">
                                    Select
                                </option>
                                {List &&
                                    List.map((e) => (
                                        <>
                                            <option value={e.average_revenue}>
                                                {">"}  {e.average_revenue}
                                            </option>
                                        </>
                                    ))}
                            </select>{" "}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="nd" class="form-label">
                                Negative Days:
                            </label>
                            <select
                                class="form-select"
                                id="nd"
                                value={Data.nd}
                                onChange={(e) => setData({ ...Data, nd: e.target.value })}
                                aria-label="Default select example"
                                required
                            >
                                <option selected value="">
                                    Select
                                </option>
                                {List &&
                                    List.map((e) => (
                                        <>
                                            <option value={e.negative_days}> {"<"} {e.negative_days}</option>
                                        </>
                                    ))}
                            </select>{" "}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="mb-3">
                            <label for="cp" class="form-label">
                                Current Positions:
                            </label>
                            <select
                                class="form-select"
                                id="cp"
                                value={Data.cp}
                                onChange={(e) => setData({ ...Data, cp: e.target.value })}
                                aria-label="Default select example"
                                required
                            >
                                <option selected value="">
                                    Select
                                </option>
                                {List &&
                                    List.map((e) => (
                                        <>
                                            <option value={e.current_positions}>
                                                {"<"}  {e.current_positions}
                                            </option>
                                        </>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-12 text-end">
                        <button
                            class="btn w-25"
                            type="submit"
                            style={{ backgroundColor: "#4152b3", color: "white" }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Query