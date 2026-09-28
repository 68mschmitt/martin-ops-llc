type Props = { eyebrow: string; title: string; body?: string; wide?: boolean };
export function SectionHeading({ eyebrow, title, body, wide = false }: Props) {
  return <div className={`section-heading${wide ? " section-heading--wide" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{body ? <p>{body}</p> : null}</div>;
}
