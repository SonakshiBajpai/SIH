import { CodeBlock } from "./CodeBlock";

export function DocContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Quickstart</h1>

      <h2>Set up</h2>
      <p>
        D3 is written using ES2015 modules. Create a custom bundle using Rollup, Webpack, or your
        preferred bundler.
      </p>

      <CodeBlock code="npm install d3" />

      <p>
        To import D3 into an ES2015 application, either import specific symbols from specific D3
        modules, or import everything into a namespace.
      </p>

      <CodeBlock code={`import * as d3 from "d3";`} />

      <h2>In Node</h2>
      <CodeBlock code={`const d3 = require("d3");`} />
    </div>
  );
}
