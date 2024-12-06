import React, { useState, useEffect } from "react";
import { fetchAuthors } from "../api";

const AuthorDropdown = ({ onSelectAuthor }) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors()
            .then((response) => setAuthors(response.data))
            .catch((error) => console.error("Error fetching authors:", error));
    }, []);

    return (
        <select onChange={(e) => onSelectAuthor(e.target.value)}>
            <option value="">Select an Author</option>
            {authors.map((author) => (
                <option key={author._id} value={author._id}>
                    {author.name}
                </option>
            ))}
        </select>
    );
};

export default AuthorDropdown;
