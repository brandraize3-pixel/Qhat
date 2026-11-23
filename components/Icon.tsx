import icons from "@/content/icons.json";

export default function Icon({ name, className }: { name: string; className?: string }) {
  const paths = (icons as Record<string, string>)[name] ?? "";
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  );
}
