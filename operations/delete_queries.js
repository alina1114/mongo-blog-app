const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Blog = mongoose.model("Blog", new mongoose.Schema({}));

// Delete a specific blog entry
Blog.updateOne(
    { name: "MongoDB Tutorial" },
    { $pull: { blogEntry: { article: "Working with Collections" } } }
).then(() => {
    console.log("Blog entry deleted!");
    mongoose.connection.close();
}).catch((err) => console.error(err));
