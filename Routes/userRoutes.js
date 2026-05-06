
const express = require("express");
const router = express.Router();
const fs = require("fs");

//save user to file
function saveUser(users) {
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
}

//get users from file
function getUser() {
    const data = fs.readFileSync("user.json");
    return JSON.parse(data);
}   



//temp data storage for users
// let users = [];

// //get all users{}
// router.get("/", (req, res) => {
//     res.json(users);
// });

// //post:create users
// router.post("/", (req, res) => {
//     const user = req.body;
//     users.push(user);
    
//     res.json({
//         message: "User added",
//         users
//     })
// });
//get all users
router.get("/users/count", (req, res) => {
    const user = getUser();
    res.json({
        totalusers:user.length,
        user
    });
});

 //create new user
 router.post("/", (req, res) => {

    const {name, age, email} = req.body;

    if(!name || !age || !email){
        return res.json({
            message: 'Validation Failed',
            error: {
                ...(!name && {name: 'Name is required'}),
                ...(!age && {age: 'Age is required'}),
                ...(!email && {email: 'Email is required'})
            }
        });
        
    }

    const user = getUser();
    const newUser = {name, age, email};

    //push new user to user array and save to file
    user.push(newUser);
    saveUser(user);

    //save response to client
    res.json({
        message: "User added",
        user
    })
});



//user routes this is is to use the router in other files. such as server.js
module.exports = router;