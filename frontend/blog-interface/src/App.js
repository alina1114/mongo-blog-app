import React, { useState } from "react";
import AuthorDropdown from "./components/AuthorDropdown";
import BlogList from "./components/BlogList";
import AddBlog from "./components/AddBlog";

function App() {
    const [selectedAuthor, setSelectedAuthor] = useState("");

    return (
        <div>
            <h1>Blog Management</h1>
            <AuthorDropdown onSelectAuthor={setSelectedAuthor} />
            {selectedAuthor && (
                <>
                    <AddBlog authorId={selectedAuthor} />
                    <BlogList authorId={selectedAuthor} />
                </>
            )}
        </div>
    );
}

export default App;
