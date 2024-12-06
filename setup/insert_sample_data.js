const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = mongoose.model("User", new mongoose.Schema({}));
const Blog = mongoose.model("Blog", new mongoose.Schema({}));
const Tag = mongoose.model("Tag", new mongoose.Schema({}));

const users = [
    { name: "Alice", emailAddress: "alice@example.com", author: { bio: "Tech Blogger" } },
    { name: "Bob", emailAddress: "bob@example.com", author: { bio: "Gadget Reviewer" } },
    { name: "Carol", emailAddress: "carol@example.com", author: { bio: "Health Blogger" } },
];

const blogs = [
    {
        name: "MongoDB Tutorial",
        URL: "https://example.com/mongodb",
        author: null, // Set author _id later
        blogEntry: [
            {
                article: "Introduction to MongoDB",
                publishDate: new Date("2024-12-01"),
                comment: [
                    { comment: "Great post!", commentDate: new Date("2024-12-02"), commentBy: null },
                    { comment: "Very informative.", commentDate: new Date("2024-12-03"), commentBy: null },
                ],
            },
        ],
    },
];

const tags = [
    { value: "MongoDB" },
    { value: "Database" },
    { value: "Tutorial" },
];

User.insertMany(users).then((savedUsers) => {
    blogs[0].author = savedUsers[0]._id; // Set Alice's _id
    blogs[0].blogEntry[0].comment[0].commentBy = savedUsers[1]._id; // Bob's _id
    blogs[0].blogEntry[0].comment[1].commentBy = savedUsers[2]._id; // Carol's _id

    return Blog.insertMany(blogs);
}).then(() => {
    return Tag.insertMany(tags);
}).then(() => {
    console.log("Sample data inserted successfully!");
    mongoose.connection.close();
}).catch((err) => console.error(err));
