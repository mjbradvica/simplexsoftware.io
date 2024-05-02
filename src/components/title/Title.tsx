import { TitleType } from "./TitleType";

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
        return <></>;
      }
    }
  };

  return determineTitleType();
};

interface TitleProperties {
  /**
   * The type of the title header, allows (1-6).
   */
  type: TitleType;
  /**
   * The content text of the title.
   */
  content: string;
}
