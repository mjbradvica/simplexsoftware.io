import { ComponentContent, ButtonType } from "../index";

export const Button: React.FC<ButtonProperties> = ({
  content,
  onClick,
  buttonType = ButtonType.Button,
}: ButtonProperties) => {
  return (
    <button
      className="button is-responsive"
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
}
