import "./App.css";
import api from "./api/axiosConfig";
import {useEffect, useState} from "react";
import {TextField, Button, Input} from "@mui/material";
import User from "./Components/User";
import Dropdown from "./Components/Dropdown";
import NewUser from "./Components/NewUser"

import user from "./Components/User";
import DeleteUserByID from "./Components/DeleteUser";

function App() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);
    const [showIdInput, setShowIdInput] = useState(false);
    const [showFormForEditUser, setShowFormForEditUser] = useState(false);
    const [showData, setShowData] = useState(false);
    const [showAddNewUser, setShowAddNewUser] = useState(false);
    const [showIdInputForDeletion, setShowIdInputForDeletion] = useState(false);

    const [inputPlaceholders, setInputPlaceholders] = useState({
        id: 'ID',
        first_name: 'First Name',
        last_name: 'Last Name',
        age: 'Age',
        email: 'Email',
        hobbies: 'Hobbies'
    });

    /* get all users handler */
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get("/api/users");
                const sortedUsers = response.data.sort((a, b) => a.id - b.id);
                setUsers(sortedUsers);
            } catch (err) {
                console.log(err);
            }
        };

        fetchUsers();
    }, []);

    const handleGetAllUsers = async () => {
        try {
            setUsers([]); // Reset users state to an empty array
            const response = await api.get("/api/users");
            const sortedUsers = response.data.sort((a, b) => a.id - b.id);
            setUsers(sortedUsers);
            setShowIdInput(false);
            setShowAddNewUser(false);
            setShowFormForEditUser(false);
            setShowIdInputForDeletion(false);
            setShowData(true);
        } catch (err) {
            console.log(err);
        }
    };

    /*------- Get user by ID Get call and handler  ------*/
    const handleGetUserById = async (id) => {
        try {
            console.log("Searched id: ", id);
            setUsers([]); // clear the users state
            const response = await api.get(`/api/users/${id}`);
            console.log("response.data: ", response.data);
            setUsers([response.data]);

        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitGetUserByID = async (e) => {
        e.preventDefault();
        // setUserId(null);
        if (userId) {
            await handleGetUserById(userId);
            setUserId("");
            setShowData(true);
        } else {
            alert("Must enter a valid user ID");
        }
    };


    const handleShowIdInput = () => {
        setUsers([]);
        setUserId("");
        setShowIdInputForDeletion(false);
        setShowFormForEditUser(false);
        setShowAddNewUser(false);
        setShowData(false);
        setShowIdInput(true);
    };

    /*--- Update user by ID update call and handlers for handleShowFormForEditUser, handleSubmit, handleUpdatebutton ---*/
    const handleUpdateUserById = async (userId, updatedUserData) => {
        try {
            const response = await api.put(`/api/users/${userId}`, updatedUserData);
            setUsers(users.map(user => {
                if (user.id === userId) {
                    return response.data;
                }
                return user;
            }));
        } catch (error) {
            console.error(error);
        }
    };
    /*handles the input for the placeholder when editing in the update user*/
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputPlaceholders((prevValues) => ({...prevValues, [name]: value}));
    };
    /* Initial setup for the placeholders in the update user*/
    const handleShowFormForEditUser = () => {
        setInputPlaceholders({
            id: 'ID',
            first_name: 'First Name',
            last_name: 'Last Name',
            age: 'Age',
            email: 'Email',
            hobbies: 'Hobbies'
        })
        setUsers([]);
        setUserId("");
        setShowIdInput(false);
        setShowAddNewUser(false);
        setShowIdInputForDeletion(false);
        setShowFormForEditUser(true);
        setShowData(false)
    };
    /* handle submit (Search button) from user form for edit*/
    const handleSubmitFromUpdateUser = async (e) => {
        e.preventDefault();
        console.log(userId);

        if (userId) {
            await getUserById(userId);
            console.log("GOT TO 158");
        }
    };
    /*from update user*/
    const getUserById = async (id) => {
        try {
            const response = await api.get(`/api/users/${id}`);
            setUsers([response.data]);
            // Update input placeholders state
            setInputPlaceholders({
                id: response.data.id,
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                age: response.data.age,
                email: response.data.email,
                hobbies: response.data.hobbies
            });
            return response.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateButton = async (e) => {
        e.preventDefault();

        if (users.length === 0) {
            // Display an error message or return early
            alert("Must enter a user ID to update");
            console.log("Must enter a user ID to update");
            return;
        }
        await handleUpdateUserById(users[0].id, inputPlaceholders);
        setShowData(true);
    };

    /*------------  Delete user delete  call and handler--------------*/
    const handleDeleteUserById = async (id) => {
        try {
            const response = await api.delete(`/api/users/${id}`);
            console.log("User was deleted" + id);
            const updatedUsers = users.filter((user) => user.id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error(error);
        }
    };
    const handleDeleteSelection = async (id) => {
        try {
            setShowData(false);
            setShowFormForEditUser(false);
            setShowIdInput(false);
            setShowAddNewUser(false);
            setShowIdInputForDeletion(true);
            setUserId(id);

            // Get the user data
            const user = await handleGetUserById(id);
            if (user === null) {
                alert("User not found.");
                return;
            }

            // Delete the user if found
            await handleDeleteUserById(id);
        } catch (error) {
            console.error(error);
        }
    };

    /*------------ add new user post call and handler--------------*/
    const handleAddNewUserSelection = (user) => {
        setShowData(false);
        setShowFormForEditUser(false);
        setShowIdInput(false);
        setShowIdInputForDeletion(false);
        setShowAddNewUser(true);

        handleAddNewUser(user);
    };

    const handleAddNewUser = async (user) => {
        try {
            const response = await api.post(`/api/users`, user);
            setUsers([...users, response.data]);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Users list</h1>
            </div>


            <div className="layout">

                <Dropdown
                    onGetAllUsers={handleGetAllUsers}
                    onGetUserById={handleShowIdInput}
                    onUpdateUserById={handleShowFormForEditUser}
                    onDeleteUserById={handleDeleteSelection}
                    onAddNewUser={handleAddNewUserSelection}
                />
                <div>
                    {/************* handle findUserById *****************/}
                    {showIdInput && (
                        <form onSubmit={handleSubmitGetUserByID}>
                            <TextField
                                label="User ID"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                variant="standard"
                            />
                            <Button variant="contained" size="small" type="submit">
                                Submit
                            </Button>
                        </form>
                    )}

                    {/************* handle updateUser *****************/}
                    {showFormForEditUser &&
                        (
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <TextField
                                                label="User ID"
                                                value={userId}
                                                onChange={(e) => setUserId(e.target.value)}
                                                variant="standard"
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <Button variant="contained" size="small" type="submit"
                                                    onClick={handleSubmitFromUpdateUser}>
                                                Search
                                            </Button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Input
                                                disabled
                                                defaultValue={inputPlaceholders.id}
                                                placeholder={inputPlaceholders.id}
                                                name="id"
                                                value={inputPlaceholders.id}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                placeholder={inputPlaceholders.first_name}
                                                name="first_name"
                                                value={inputPlaceholders.first_name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                placeholder={inputPlaceholders.last_name}
                                                name="last_name"
                                                value={inputPlaceholders.last_name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Input
                                                placeholder={inputPlaceholders.age}
                                                name="age"
                                                value={inputPlaceholders.age}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                placeholder={inputPlaceholders.email}
                                                name="email"
                                                value={inputPlaceholders.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                placeholder={inputPlaceholders.hobbies}
                                                name="hobbies"
                                                value={inputPlaceholders.hobbies}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Button variant="contained" size="small" type="submit"
                                                    onClick={handleUpdateButton}>
                                                Update
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    {showAddNewUser &&
                        (<NewUser
                            onSubmit={handleAddNewUserSelection}
                        />)

                    }
                    {showIdInputForDeletion && (
                        <DeleteUserByID
                            handleDeleteSelection={handleDeleteSelection}
                        />
                    )}
                </div>


                <div className="user">
                    {showData && users.map((userItem, index) => {
                        return (
                            <div className="userItem" key={index}>
                                <User
                                    id={userItem.id}
                                    first_name={userItem.first_name}
                                    last_name={userItem.last_name}
                                    email={userItem.email}
                                    age={userItem.age}
                                    hobbies={userItem.hobbies}
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default App;
