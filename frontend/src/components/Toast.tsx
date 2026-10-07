import { useEffect } from "react";

export function Toast({
  message,
  onDone,
}: {
  message: string | null;
  onDone: () => void;
}) {
  useEffect(() => {
    if (!message) return;
    const id = window.setTimeout(onDone, 4200);
    return () => window.clearTimeout(id);
  }, [message, onDone]);

  if (!message) return null;

  return (
    <div
      role="status"
      className="fixed top-24 left-1/2 z-[70] w-[min(92vw,420px)] -translate-x-1/2 rounded-sm border border-white/10 bg-ink-card px-5 py-4 text-sm text-white shadow-xl"
    >
      {message}
    </div>
  );
}
