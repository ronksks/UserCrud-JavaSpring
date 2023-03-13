import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Dropdown from "./Dropdown";

const DeleteUserByID = (props) => {
    const [userId, setUserId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleDeleteSelection(userId);

    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                variant="standard"

            />
            <Button variant="contained" size="small" type="submit">
                Delete User
            </Button>
        </form>
    );
};
export default DeleteUserByID;
