import Image from "next/image";

// import rehypeJsonCanvas from "rehype-jsoncanvas";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import parser from "remark-parse";
import mdast2hast from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeJsonCanvas from "rehype-jsoncanvas";

async function renderMarkdown(markdown: string) {
  const md = await unified()
    .use(parser)
    .use(mdast2hast)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeJsonCanvas, {
      assetPath: null,
      mdPath: "markdown",
      ssrPath: "public",
    })
    .use(rehypeStringify)
    .process(markdown);

  return md;
}

export default async function Home() {
  const text = await fetch("http://127.0.0.1:3003/example.md");
  const results = await text.text();
  const markdown = await renderMarkdown(results);
  return (
    <main className=" bg-white text-black">
      <h3 className="font-black">Markdown rendered below:</h3>
      <div dangerouslySetInnerHTML={{ __html: await markdown.value }} />
    </main>
  );
}
