"use client";

import type { FormEvent } from "react";
import { useLookbookActions, useLookbookState } from "@/store/selectors";

const promptTags = [
  "Runway concrete set",
  "Black and gold editorial",
  "Chrome hardware macro",
  "Luxury street portrait",
  "Monochrome wardrobe block",
  "Soft spotlight texture",
];

export function LookbookPromptPanel() {
  const { lookbookPrompt } = useLookbookState();
  const { setLookbookPrompt } = useLookbookActions();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const appendPromptTag = (tag: string) => {
    const normalizedTag = tag.toLowerCase();
    const normalizedPrompt = lookbookPrompt.toLowerCase();

    if (normalizedPrompt.includes(normalizedTag)) {
      return;
    }

    if (!lookbookPrompt.trim()) {
      setLookbookPrompt(normalizedTag);
      return;
    }

    setLookbookPrompt(`${lookbookPrompt}, ${normalizedTag}`);
  };

  return (
    <article className="space-y-4 border border-[var(--line)] p-4">
      <p className="break-words text-xs uppercase leading-relaxed tracking-[0.14em] text-[var(--text-secondary)] sm:tracking-[0.19em]">
        Prompt Engine: {lookbookPrompt}
      </p>
      <div className="flex flex-wrap gap-2">
        {promptTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="pill transition-colors hover:border-[var(--line-strong)]"
            onClick={() => appendPromptTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
        <input
          className="field-input h-12"
          value={lookbookPrompt}
          aria-label="Lookbook prompt"
          onChange={(event) => setLookbookPrompt(event.target.value)}
        />
        <button type="submit" className="btn-solid h-12 w-full sm:w-auto sm:min-w-36">
          Generate Looks
        </button>
      </form>
    </article>
  );
}
