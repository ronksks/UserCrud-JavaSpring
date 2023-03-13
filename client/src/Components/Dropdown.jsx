import React, {useState} from "react";

function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const [userId, setUserId] = useState("");
    function handleOptionChange(event) {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === "1") {
            props.onGetAllUsers();
        }

        if (selectedValue === "2") {
            // setUserId("");
            // handleGetUserById();
            props.onGetUserById();
        }

        if (selectedValue === "3") {
            props.onUpdateUserById();
        }

        if (selectedValue === "4") {
            props.onDeleteUserById();
        }

        if (selectedValue === "5") {
            props.onAddNewUser();
        }

    }

    function handleUserIdChange(event) {
        const selectedValue = event.target.value;
        setUserId(selectedValue);
    }

    // function handleGetUserById() {
    //     props.onGetUserById(userId);
    // }

    return (
        <div>
            <select className="form-select" aria-label="Default select example" onChange={handleOptionChange}
                    value={selectedOption}>
                <option>Choose an option</option>
                <option value="1">GetAllUsers</option>
                <option value="2">GetUserById</option>
                <option value="3">UpdateUserById</option>
                <option value="4">DeleteUserById</option>
                <option value="5">AddNewUser</option>
            </select>
        </div>
    );
}

export default Dropdown;


// import React, { useState } from "react";
//
// function Dropdown(props) {
//     const [selectedOption, setSelectedOption] = useState("");
//
//     function handleOptionChange(event) {
//         const selectedValue = event.target.value;
//         setSelectedOption(selectedValue);
//         switch (selectedValue) {
//             case "1":
//                 props.onGetAllUsers();
//                 break;
//             case "2":
//                 props.onGetUserById();
//                 break;
//             case "3":
//                 props.onUpdateUserById();
//                 break;
//             case "4":
//                 props.onDeleteUserById();
//                 break;
//             default:
//                 break;
//         }
//     }
//
//     return (
//         <select className="form-select" aria-label="Default select example" onChange={handleOptionChange} value={selectedOption}>
//             <option >Choose an option</option>
//             <option value="1">GetAllUsers</option>
//             <option value="2">GetUserById</option>
//             <option value="3">UpdateUserById</option>
//             <option value="4">DeleteUserById</option>
//         </select>
//     );
// }
//
// export default Dropdown;
