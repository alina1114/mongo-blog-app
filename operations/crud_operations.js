const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const blogSchema = new mongoose.Schema({
    name: String,
    URL: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    blogEntry: [
        {
            article: String,
            publishDate: Date,
            comment: [
                {
                    comment: String,
                    commentDate: Date,
                    commentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                },
            ],
        },
    ],
    tags: [{ value: String }],
});

const Blog = mongoose.model("Blog", blogSchema);

// Example: Find blogs by author
Blog.find({ author: "6752c9774e29892cd00d8190" }) // Replace with Alice's _id
    .then((blogs) => {
        console.log(blogs);
        mongoose.connection.close();
    })
    .catch((err) => console.error(err));
