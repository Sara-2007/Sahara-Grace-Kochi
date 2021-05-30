import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Redirect } from "react-router"
import Dropdown from "react-dropdown"

import countries from "../country-codes"

function Contact() {
    const countryList = countries.list

    var i = 0

    var countryNames = []

    for (i = 0; i < countryList.length; i++) {
        var countryName = countryList[i].name
        countryNames.push(countryName)
    }

    var defaultOption = countryNames[102]

    const [name, setName] = useState()
    const [building, setBuilding] = useState()
    const [apt, setApt] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [comments, setComments] = useState()

    async function handleSubmit(e) {
        e.preventDefault()

        var url =
            "https://enigmatic-harbor-81954.herokuapp.com/contacted/" +
            name +
            "/" +
            building +
            "/" +
            apt +
            "/" +
            email +
            "/" +
            phone +
            "/" +
            comments

        console.log(url)

        alert("Thank you for submitting!")

        return <Redirect to="/" />

        try {
            await Axios.post(url)
        } catch (e) {
            console.log("ERROR! ERROR! DANGER! DANGER!")
        }
    }

    return (
        <>
            <div className="container">
                <br />
                <h1 className="upper-text">
                    {" "}
                    Contact Us <i className="bi bi-chat-dots-fill"></i>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Block" className="form-label">
                            Block/Building
                        </label>
                        <input
                            onChange={e => setBuilding(e.target.value)}
                            type="text"
                            className="form-control"
                            id="Block"
                            placeholder="Block/Building"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apt" className="form-label">
                            Apartment Number
                        </label>
                        <input
                            onChange={e => setApt(e.target.value)}
                            type="number"
                            className="form-control"
                            id="apt"
                            placeholder="Apartment Number"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            required
                        ></input>
                    </div>
                    <label htmlFor="phone" className="form-label">
                        Phone Number
                    </label>
                    <div className="input-group mb-3">
                        <Dropdown
                            className="btn btn-outline-secondary"
                            options={countryNames}
                            value={defaultOption}
                            placeholder="Country"
                        />
                        <input
                            onChange={e => setPhone(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            aria-label="Text input with dropdown button"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Comments" className="form-label">
                            Comments
                        </label>
                        <textarea
                            onChange={e => setComments(e.target.value)}
                            className="form-control"
                            id="Comments"
                            placeholder="Write your message here....."
                        ></textarea>
                    </div>
                    <button className="btn btn-lg btn-dark">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
