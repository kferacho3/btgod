"use client";

import type { FormEvent } from "react";
import { useLookbookActions, useLookbookState } from "@/store/selectors";

const promptTags = [
  "Crown-lit performance tunnel",
  "Noir studio texture",
  "Gold rim light",
  "Rain-slick city blocks",
  "Monochrome wardrobe discipline",
  "High contrast editorial grain",
];

export function LookbookPromptPanel() {
  const { lookbookPrompt } = useLookbookState();
  const { setLookbookPrompt } = useLookbookActions();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <article className="space-y-4 border border-[var(--line)] p-4">
      <p className="text-xs uppercase tracking-[0.19em] text-[var(--text-secondary)]">
        Prompt Engine: {lookbookPrompt}
      </p>
      <div className="flex flex-wrap gap-2">
        {promptTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="pill transition-colors hover:border-[var(--line-strong)]"
            onClick={() =>
              setLookbookPrompt(`${lookbookPrompt}, ${tag.toLowerCase()}`)
            }
          >
            {tag}
          </button>
        ))}
      </div>
      <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
        <input
          className="field-input h-12"
          value={lookbookPrompt}
          onChange={(event) => setLookbookPrompt(event.target.value)}
        />
        <button type="submit" className="btn-solid h-12 min-w-36">
          Generate Visuals
        </button>
      </form>
    </article>
  );
}
