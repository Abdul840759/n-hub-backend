
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


//POST new user
router.post("/users", (req, res) => {
    const users = getUser();

    const newUser= {
        id:Date.now(),

        ...req.body 
    };

    users.push(new user);
    saveUser(users);
    });
//update user
router.patch("/:id", (req, res) => {
    //get user id from file
    const usedrs = getUser();

    //get user with id
    const id = number(req.params.id);
    //find user with id
    const userindex = users.findIndex(user => user.id === id);

    //check if user does not exist
    if (userindex === -1) {
        return res.json({
            message: "User not found"
        });
    }

    //udate user data
    users[userindex] = {
        //keep existing data and update with new data from request body
        ...users[userindex],
        //return all new data from request body and overwrite existing data with same keys
        ...req.body
    };

    //save updated users to file
    saveUser(users);
res.json({
    message: "User sucessfully updated",
    users
});
});

//delete user
router.delete("/id", (req, res) => {
    const users = getUser();
    const id = number(req.params.id);
    const userindex = users.findIndex(user => user.id === id);

    if (userindex === -1) {
        return res.json({
            message: "User not found"
        });
    }

    //remove user from array
    const deletedUser = users.splice(userindex, 1)[0];

    saveUser(users);

    res.json({
        message: "User sucessfully deleted",
        deletedUser,
        users
    });

});



//user routes this is is to use the router in other files. such as server.js
module.exports = router;