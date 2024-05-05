/**
 * A layout component that defines an informational section of content.
 */
export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="text-center">
        <p>
          Copyright &copy; {new Date().getUTCFullYear()} SimplexSoftware.io All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
