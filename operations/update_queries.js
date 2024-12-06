const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Blog = mongoose.model("Blog", new mongoose.Schema({}));

// Update a comment
Blog.updateOne(
    { "blogEntry.comment.comment": "Great post!" },
    { $set: { "blogEntry.$[].comment.$[c].comment": "Fantastic post!" } },
    { arrayFilters: [{ "c.comment": "Great post!" }] }
).then(() => {
    console.log("Comment updated!");
    mongoose.connection.close();
}).catch((err) => console.error(err));
