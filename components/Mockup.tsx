import mockups from "@/content/mockups.json";

/** Static product mockups (laptop ERP dashboard, phone app, analytics card). */
export default function Mockup({ name, className }: { name: "laptop" | "phone" | "analytics"; className?: string }) {
  return <div className={className} aria-hidden="true" style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: mockups[name] }} />;
}
