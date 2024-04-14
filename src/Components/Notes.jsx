import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: title,
      description: description,
      imageUrl: imageLink,
      color: selectedColor,
      createdAt: new Date(),
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setDescription("");
    setImageLink("");
  };
  const handleSortByTime = (order) => {
    if (order === "ascending") {
      setNotes([...notes.sort((a, b) => a.createdAt - b.createdAt)]);
    } else if (order === "descending") {
      setNotes([...notes.sort((a, b) => b.createdAt - a.createdAt)]);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return notes;
    }
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Todo App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link active"
                  onClick={() => handleSortByTime("ascending")}
                  aria-current="page"
                  href="#"
                >
                  Sort By A-Z
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link active"
                  onClick={() => handleSortByTime("descending")}
                  aria-current="page"
                  href="#"
                >
                  Sort By Z-A
                </button>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                aria-label="Search"
                placeholder="Search Notes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>{" "}
      <div className="flex flex-col items-center justify-center">
        <div className="row m-1">
          <h5 className="text-center">Todo App</h5>
          {handleSearch().map((note) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4"
              key={note.id}
            >
              <div>
                <h3>{note.title}</h3>
                <p className="fs-3" style={{ color: `${note.color}` }}>
                  {note.description}
                </p>
                <img
                  className="img-fluid rounded"
                  src={note.imageUrl}
                  alt="Note Image"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="container">
          <input
            className="form-control m-2"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control m-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-control m-2"
            type="text"
            placeholder="Image/Video Link"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />
          <input
            className="form-control m-2"
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddNote}>
            Add Note
          </button>
        </div>
      </div>
    </>
  );
};

export default Notes;
