interface SectionWrapperProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-1.5 text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

interface ShowcaseCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseCard({ title, description, children, className = "" }: ShowcaseCardProps) {
  return (
    <div className={`rounded-xl border bg-card ${className}`}>
      <div className="border-b px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</p>
        {description && <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
