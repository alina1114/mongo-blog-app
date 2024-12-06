const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    name: String,
    emailAddress: String,
    author: { bio: String },
});

const User = mongoose.model("User", userSchema);

const users = [
    { name: "Alice", emailAddress: "alice@example.com", author: { bio: "Tech Blogger" } },
    { name: "Bob", emailAddress: "bob@example.com", author: { bio: "Gadget Reviewer" } },
    { name: "Carol", emailAddress: "carol@example.com", author: { bio: "Health Blogger" } },
];

User.insertMany(users)
    .then(() => {
        console.log("Users inserted successfully!");
        mongoose.connection.close();
    })
    .catch((err) => console.error(err));
