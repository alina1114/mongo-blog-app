const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BlogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Blog = mongoose.model("Blog", new mongoose.Schema({}));

// Count blog entries by author
Blog.aggregate([
    { $unwind: "$blogEntry" },
    { $group: { _id: "$author", totalEntries: { $sum: 1 } } }
]).then((result) => {
    console.log("Blog counts by author:", result);
    mongoose.connection.close();
}).catch((err) => console.error(err));
