import Image from "next/image";

// import rehypeJsonCanvas from "rehype-jsoncanvas";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import parser from "remark-parse";
import mdast2hast from "remark-rehype";
import compiler from "rehype-react";
import rehypeStringify from "rehype-stringify";
import rehypeJsonCanvas from "rehype-jsoncanvas";

async function renderMarkdown(markdown: string) {
  const md = await unified()
    .use(parser)
    .use(mdast2hast)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeJsonCanvas)
    .use(rehypeStringify)
    .processSync(markdown);

  return md;
}

export default async function Home() {
  const text = await fetch("http://127.0.0.1:3003/example.md");
  const results = await text.text();
  console.log(results);
  const markdown = await renderMarkdown(results);
  console.log(markdown);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h3 className="font-black">Markdown rendered below:</h3>
        <div dangerouslySetInnerHTML={{ __html: await markdown.value }} />
      </div>
    </main>
  );
}
