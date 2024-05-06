import { Link } from "react-router-dom";
import { Container } from "../../../components";
import { AppRoute } from "../../../app/App.routes";

/**
 * Defines a component that serves as the primary navigation component for the site.
 */
export const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar bg-body">
        <Container>
          <Link to={AppRoute}>SimplexSoftware.io</Link>
        </Container>
      </nav>
    </header>
  );
};
