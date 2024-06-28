import "./App.css";
import example from "./base.md";

import React, { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeJsonCanvas from "rehype-jsoncanvas";

function App() {
  console.log("Content", example);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // setMarkdown(example);
    fetch(example)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeJsonCanvas]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default App;
