import { Container } from "../../../components";

/**
 * Defines a component that serves as the primary navigation component for the site.
 */
export const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <Container>
          <a className="navbar-brand" href="#">
            SimplexSoftware.io
          </a>
        </Container>
      </nav>
    </header>
  );
};
