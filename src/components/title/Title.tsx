import { TitleType, ComponentContent } from "../index";

/**
 * A stylized heading for starting sections of a document.
 */
export const Title: React.FC<TitleProperties> = ({
  titleType,
  content,
}: TitleProperties) => {
  const determineTitleType = (): React.JSX.Element => {
    switch (titleType) {
      case TitleType.One: {
        return <h1>{content}</h1>;
      }
      case TitleType.Two: {
        return <h2>{content}</h2>;
      }
      case TitleType.Three: {
        return <h3>{content}</h3>;
      }
      case TitleType.Four: {
        return <h4>{content}</h4>;
      }
      case TitleType.Five: {
        return <h5>{content}</h5>;
      }
      case TitleType.Six: {
        return <h6>{content}</h6>;
      }
      default: {
        return <h6>{content}</h6>;
      }
    }
  };

  return determineTitleType();
};

interface TitleProperties extends ComponentContent {
  /**
   * The type of the title header, allows (1-6).
   */
  titleType: TitleType;
}
