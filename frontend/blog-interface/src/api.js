import axios from "axios";

// Create an Axios instance with the base URL of your backend
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// API Endpoints
export const fetchAuthors = () => API.get("/users"); // Fetch all authors
export const fetchBlogsByAuthor = (authorId) => API.get(`/blogs?author=${authorId}`); // Fetch blogs by author
export const fetchBlogDetails = (blogId) => API.get(`/blogs/${blogId}`); // Fetch blog details (entries, comments, tags)
export const createBlog = (blogData) => API.post("/blogs", blogData); // Add a new blog
export const updateBlog = (blogId, updatedBlog) => API.put(`/blogs/${blogId}`, updatedBlog); // Update a blog
export const deleteBlog = (blogId) => API.delete(`/blogs/${blogId}`); // Delete a blog
export const addComment = (blogId, comment) => API.post(`/blogs/${blogId}/comments`, comment); // Add a comment
export const fetchBlogsByTag = (tag) => API.get(`/blogs/search?tag=${tag}`); // Search blogs by tag
