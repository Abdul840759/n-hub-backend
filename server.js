const express = require("express");
const app = express();  
const userRoutes = require("./Routes/userRoutes");
app.use(express.json());

//import user routes
app . use("/api/users", userRoutes);

// LOGIN check
app.post("/login", (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is compulsory" });
    }

    res.json({ message: "Login successful" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");

});