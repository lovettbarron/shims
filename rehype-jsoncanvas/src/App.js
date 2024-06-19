import "./App.css";
import React, { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import example from "../node_modules/rehype-jsoncanvas/example/base.md";

function App() {
  console.log("Content", example);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(example)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
