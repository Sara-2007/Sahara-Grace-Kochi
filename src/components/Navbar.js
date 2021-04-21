import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <header className="navbar head-custom">
                <div className="container d-flex flex-column flex-md-row align-items-center p-3">
                    <h4 className="my-0 mr-md-auto font-weight-normal">
                        <Link to="/" className="text-dark nav-link upper-text">
                            Sahara Grace Kochi Investors Association
                        </Link>
                    </h4>
                    <form className="mb-0 pt-2 pt-md-0">
                        <div className="row align-items-center">
                            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                                <input
                                    name="username"
                                    className="form-control form-control-sm input-dark"
                                    type="text"
                                    placeholder="Username"
                                    autocomplete="off"
                                />
                            </div>
                            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                                <input
                                    name="password"
                                    className="form-control form-control-sm input-dark"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="col-md-auto">
                                <button className="btn btn-dark btn-sm">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Navbar
