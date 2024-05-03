import path from "path";

export default async function Page() {
  const base = path.join(process.cwd(), "contentsx4", "hersteller");
  return (
    <div>
      <h1>TEST</h1>
      <p>Base path: {base}</p>
    </div>
  );
}
