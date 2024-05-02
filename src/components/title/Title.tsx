import { TitleType, ComponentContent } from "../index";

/**
 * A stylized heading for starting sections of a document.
 */
export const Title: React.FC<TitleProperties> = ({
  type,
  content,
}: TitleProperties) => {
  const determineTitleType = (): React.JSX.Element => {
    switch (type) {
      case TitleType.One: {
        return <h1 className="title is-1">{content}</h1>;
      }
      case TitleType.Two: {
        return <h2 className="title is-2">{content}</h2>;
      }
      default: {
        return <h6 className="title is-6">{content}</h6>;
      }
    }
  };

  return determineTitleType();
};

interface TitleProperties extends ComponentContent {
  /**
   * The type of the title header, allows (1-6).
   */
  type: TitleType;
}
