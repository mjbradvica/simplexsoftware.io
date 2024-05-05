import {
  ComponentContent,
  ButtonType,
  ColorType,
  determineColorType,
} from "../index";

export const Button: React.FC<ButtonProperties> = ({
  buttonType = ButtonType.Button,
  colorType = ColorType.Primary,
  content,
  onClick,
}: ButtonProperties) => {
  return (
    <button
      className={`btn btn-${determineColorType(colorType)}`}
      onClick={onClick}
      type={buttonType == ButtonType.Button ? "button" : "submit"}
    >
      {content}
    </button>
  );
};

interface ButtonProperties extends ComponentContent {
  /**
   * The type of the button. Defaults to "button".
   */
  readonly buttonType?: ButtonType;

  /**
   * The color type of the button. Defaults to primary.
   */
  readonly colorType?: ColorType;

  /**
   * A handler that accepts a mouse event to handle.
   * @param event A React.MouseEvent
   * @returns void
   */
  readonly onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
