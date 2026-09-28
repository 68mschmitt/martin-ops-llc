"use client";

import { useState } from "react";
import styles from "./for-agents.module.css";

export function CopyBriefButton({ markdown }: { markdown: string }) {
  const [status, setStatus] = useState("");

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(markdown);
      setStatus("Company brief copied.");
    } catch {
      setStatus("Copy is unavailable here. Use the Markdown version link instead.");
    }
  }

  return (
    <span className={styles.copyControl}>
      <button className="button button--outline" type="button" onClick={copyBrief}>
        Copy company brief
      </button>
      <span className={styles.copyStatus} role="status" aria-live="polite">{status}</span>
    </span>
  );
}
