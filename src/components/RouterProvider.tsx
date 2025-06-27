import { createContext, use, type ReactNode } from "react";
import { HashRouter, StaticRouter } from "react-router";

const IsNested = createContext(false);

export function Router({
  children,
  location = "/",
  type = "browser",
}: {
  children: ReactNode;
  location?: string;
  type?: "browser" | "static";
}) {
  const isNestedRouter = use(IsNested);
  if (!isNestedRouter && type === "browser") {
    return (
      <HashRouter>
        <IsNested value>{children}</IsNested>
      </HashRouter>
    );
  }

  if (!isNestedRouter && type === "static") {
    return (
      <StaticRouter location={location}>
        <IsNested value>{children}</IsNested>
      </StaticRouter>
    );
  }

  return children;
}
