import React, { useState, useEffect } from "react";
import { fetchBlogsByAuthor } from "../api";

const BlogList = ({ authorId }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        if (authorId) {
            fetchBlogsByAuthor(authorId)
                .then((response) => setBlogs(response.data))
                .catch((error) => console.error("Error fetching blogs:", error));
        }
    }, [authorId]);

    return (
        <div>
            <h2>Blogs</h2>
            {blogs.length === 0 ? (
                <p>No blogs found for this author.</p>
            ) : (
                blogs.map((blog) => (
                    <div key={blog._id}>
                        <h3>{blog.name}</h3>
                        <p>URL: {blog.URL}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
