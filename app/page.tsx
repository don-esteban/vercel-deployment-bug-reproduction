import path from "path";

export default async function Page() {
  const base = `${process.cwd()}/contentsx/hersteller`;
  return (
    <div>
      <h1>TEST at 24/10/08</h1>
      <p>Base path: {base}</p>
      <p>Path to project: {process.cwd()}</p>
    </div>
  );
}
