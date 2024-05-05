import {
  ComponentContent,
  ButtonType,
  ColorType,
  determineColorType,
} from "../index";

export const Button: React.FC<ButtonProperties> = ({
  colorType = ColorType.Primary,
  content,
  onClick,
  buttonType = ButtonType.Button,
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
   * A handler that accepts a mouse event to handle.
   * @param event A React.MouseEvent
   * @returns void
   */
  readonly onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The type of the button. Defaults to "button".
   */
  readonly buttonType?: ButtonType;

  /**
   * The color type of the button. Defaults to primary.
   */
  readonly colorType?: ColorType;
}
