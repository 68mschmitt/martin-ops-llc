import type { FAQ } from "@/content/faqs";
import { JsonLd } from "@/components/json-ld";

export function FAQList({ items }: { items: FAQ[] }) {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <><JsonLd data={schema} /><div className="faq-list">{items.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}</summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div></>;
}
