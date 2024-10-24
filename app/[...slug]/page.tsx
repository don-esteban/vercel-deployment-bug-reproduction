import path from "path";
import fs from "fs";

export default async function Page() {
  const base = `${process.cwd()}/contentsx4/hersteller`
  const file = fs.readFileSync(path.join(base, 'abbyy', 'index.mdx'), 'utf8')
  return (
    <div>
      <h1>Request time redering</h1>
      <div>
      {file}
      </div>
    </div>
  );
}
