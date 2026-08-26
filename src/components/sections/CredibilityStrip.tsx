const items = ["Est. 2003", "Design", "Engineering", "Installation", "Maintenance"];

export default function CredibilityStrip() {
  return (
    <section className="border-b border-border bg-canvas">
      <div className="container flex flex-wrap items-center gap-x-8 gap-y-3 py-8">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                i === 0 ? "text-accent" : "text-muted"
              }`}
            >
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
