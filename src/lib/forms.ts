import type { FormEvent } from "react";

/**
 * The design's forms are display-only (no backend is wired up yet), so
 * submitting must not reload the page.
 */
export function preventSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
}
