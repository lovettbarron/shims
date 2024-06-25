import "./App.css";
import example from "rehype-jsoncanvas/example/base.md";

import React, { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeJsonCanvas from "rehype-jsoncanvas";

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
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeJsonCanvas]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default App;
