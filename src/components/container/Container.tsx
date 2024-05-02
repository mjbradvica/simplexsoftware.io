import { ChildNode } from "../index";

export const Container: React.FC<ChildNode> = ({ children }: ChildNode) => {
  return <div className="container">{children}</div>;
};
