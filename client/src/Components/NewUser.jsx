import React, { useState } from "react";

function NewUser(props) {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        hobbies: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
            hobbies: user.hobbies,
        };
        props.onSubmit(newUser);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    value={user.first_name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    value={user.last_name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="hobbies">Hobbies:</label>
                <input
                    type="text"
                    className="form-control"
                    id="hobbies"
                    name="hobbies"
                    value={user.hobbies}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Add New User
            </button>
        </form>
    );
}

export default NewUser;
