import type { ArticleBlock } from "@/content/insights";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return <div className="prose">{blocks.map((block, index) => {
    if (block.type === "paragraph") return <p key={index}>{block.text}</p>;
    if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
    if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    return <aside className="article-callout" key={index}><p>{block.text}</p></aside>;
  })}</div>;
}
