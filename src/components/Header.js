import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="head-custom">
                <div className="container py-md-5">
                    <div className="row align-items-center">
                        <div className="py-md-5">
                            <h1 className="head-text">Sahara Grace Kochi</h1>
                            <p className="upper-text">
                                Invested in Sahara Grace Kochi?{" "}
                                <Link to="/contact" className="link-dark">
                                    Contact Us
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
