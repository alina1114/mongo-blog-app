const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Blog = mongoose.model("Blog", new mongoose.Schema({}));

Blog.updateMany(
    { name: "MongoDB Tutorial" },
    { $set: { tags: [{ value: "MongoDB" }, { value: "Database" }] } }
).then(() => {
    console.log("Tags added successfully!");
    mongoose.connection.close();
}).catch((err) => console.error(err));
