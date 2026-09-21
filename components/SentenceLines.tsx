type SentenceLinesProps = {
  text: string;
  /** Class applied to every rendered line (defaults to a block element). */
  className?: string;
  /** Spacing class added after the first line so each next line starts with a gap. */
  spacing?: string;
};

/**
 * Splits a paragraph into its sentences and renders each sentence on its own
 * line with a small gap, without changing any of the text content.
 * Existing newline breaks in the source text are preserved as line breaks.
 */
export default function SentenceLines({
  text,
  className = "block",
  spacing = "mt-3",
}: SentenceLinesProps) {
  const lines = text
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .flatMap((part) =>
      part
        .split(/(?<=[.!?])\s+(?=[A-Z])/)
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence.length > 0)
    );

  return (
    <>
      {lines.map((line, index) => (
        <span
          key={index}
          className={`${className}${index > 0 ? ` ${spacing}` : ""}`}
        >
          {line}
        </span>
      ))}
    </>
  );
}