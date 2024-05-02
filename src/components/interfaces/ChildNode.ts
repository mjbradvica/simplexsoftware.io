import { ReactNode } from "react";

/**
 * Designates a component that accepts a node of children.
 */
export default interface ChildNode {
  /**
   * The child node that may contain N number of elements.
   */
  children: ReactNode;
}
