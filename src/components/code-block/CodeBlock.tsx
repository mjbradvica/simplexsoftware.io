import { RequiredChildren } from "../index";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";

export const CodeBlock: React.FC<RequiredChildren> = ({
  children,
}: RequiredChildren) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="text-bg-light px-5 py-3 rounded">
      <code>{children}</code>
    </pre>
  );
};
