import React, { useEffect } from "react"

function Contact() {
    function handleSubmit(e) {
        e.preventDefault()

        alert("Thank you!")
    }

    return (
        <>
            <div className="container">
                <br />
                <h1 className="upper-text">
                    {" "}
                    Contact Us <i class="bi bi-chat-dots-fill"></i>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" class="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Name"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="Block" class="form-label">
                            Block/Building
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="Block"
                            placeholder="Block/Building"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="apt" class="form-label">
                            Apartment Number
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="apt"
                            placeholder="Apartment Number"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="email" class="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="name@example.com"
                            required
                        ></input>
                    </div>
                    <label for="phone" class="form-label">
                        Phone Number
                    </label>
                    <div class="input-group mb-3">
                        <button
                            class="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Country
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                        <input
                            type="number"
                            id="phone"
                            class="form-control"
                            aria-label="Text input with dropdown button"
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="Comments" class="form-label">
                            Comments
                        </label>
                        <textarea
                            class="form-control"
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
