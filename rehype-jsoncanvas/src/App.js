import "./App.css";
import example from "./base.md";

import React, { useState, useEffect } from "react";
import * as prod from "react/jsx-runtime";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeJsonCanvas from "rehype-jsoncanvas";
import remarkGfm from "remark-gfm";

import { unified } from "unified";
import parser from "remark-parse";
import mdast2hast from "remark-rehype";
import compiler from "rehype-react";

const production = {
  createElement: React.createElement,
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
};

function App() {
  console.log("Content", example);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // setMarkdown(example);
    fetch(example)
      .then((res) => res.text())
      .then(async (text) => setMarkdown(await renderMarkdown(text)));

    async function renderMarkdown(markdown) {
      console.log(markdown);
      const md = await unified()
        .use(parser)
        .use(mdast2hast)
        .use(remarkGfm)
        .use(rehypeJsonCanvas)
        .use(compiler, production)
        .process(markdown);

      console.log(md);
      return md;
    }
  }, []);
  console.log(markdown);
  return <div className="App">{markdown.result}</div>;
}

export default App;
