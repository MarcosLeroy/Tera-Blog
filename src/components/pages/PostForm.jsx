import React, { useState } from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import { useParams } from "react-router-dom";

export default function PostForm() {
  const { userId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    fetch(`https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "content-type": "application/json" },
    }).then(() => {
      setIsLoading(false);
      setTitle("");
      setContent("");
    });

    console.log("onSubmit");
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input
              type="text"
              id="name"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
