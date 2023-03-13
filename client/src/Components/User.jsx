import React, {useState} from "react";
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {TextField} from "@mui/material";


function User(props) {
    const [newUser, setNewUser] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        age: "",
        hobbies: ""
    });

    function handleChange(e) {
        setNewUser(e.target.value);
    }

    return (

        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <label>Id</label>
                </div>
                <div className="col">
                    <p>{props.id}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>First Name</label>
                </div>
                <div className="col">
                    <p>{props.first_name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Last Name</label>
                </div>
                <div className="col">
                    <p>{props.last_name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Age</label>
                </div>
                <div className="col">
                    <p>{props.age}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Email</label>
                </div>
                <div className="col">
                    <p>{props.email}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Hobbies</label>
                </div>
                <div className="col">
                    <p>{props.hobbies}</p>
                </div>
            </div>
        </div>

    );

}

export default User;


{/*<div>*/
}
{/*    <label>id</label>*/
}
{/*    <p>{props.id}</p>*/
}
{/*    <p>{props.first_name}</p>*/
}
{/*    <p>{props.last_name}</p>*/
}
{/*    <p>{props.email}</p>*/
}
{/*    <p>{props.age}</p>*/
}
{/*    <p>{props.hobbies}</p>*/
}
{/*    /!*<div className ="userItem">*!/*/
}
{/*    /!*    <TextField onChange={handleChange} id="standard-basic" label="Edit User" variant="standard" />*!/*/
}
{/*    /!*</div>*!/*/
}
{/*</div>*/
}
