import path from "path";
import fs from "fs";

export default async function Page() {
  const base = `${process.cwd()}/contentsx4/hersteller`
  const file = fs.readFileSync(path.join(base, 'abbyy', 'index.mdx'), 'utf8') // Can't access the file
  return (
    <div>
      <h1>TEST at 25/10/08</h1>
      <div>
      {file}
      </div>
    </div>
  );
}
