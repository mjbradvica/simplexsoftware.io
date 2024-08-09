import { RequiredChildren } from "../index";

export const Container: React.FC<RequiredChildren> = ({
  children,
}: RequiredChildren) => {
  return <div className="container">{children}</div>;
};
