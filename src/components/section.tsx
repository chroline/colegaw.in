import { Button } from "~/components/ui/button";

export function Section({
  label,
  action,
  children,
}: {
  label: string;
  action?: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="eyebrow">{label}</h2>
        {action && (
          <Button asChild className="h-auto p-0 text-meta text-faint hover:no-underline hover:text-ink" variant="link">
            <a href={action.href} rel="noreferrer noopener" target="_blank">
              {action.label} &rarr;
            </a>
          </Button>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
