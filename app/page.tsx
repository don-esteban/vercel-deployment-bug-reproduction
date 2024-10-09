import path from "path";

export default async function Page() {
//  const base = `${process.cwd()}/contentsx4/hersteller`; // Observe the typo. It should be "contentsx4" instead of "contentsx"
  const base = '/vercel/path0/contentsx4/hersteller'
  return (
    <div>
      <h1>TEST at 24/10/08</h1>
      {/* <p>Base path: {base}</p> */}
      <p>Path to project: {process.cwd()}</p>
    </div>
  );
}
