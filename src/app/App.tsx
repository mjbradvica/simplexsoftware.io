import { Title, TitleType } from "../components";

const App: React.FC = () => {
  return (
    <div>
      <Title content="Simplex-Software.io" titleType={TitleType.One} />
      <button className="btn btn-primary" type="button">
        Primary
      </button>
      <button className="btn btn-secondary" type="button">
        Secondary
      </button>
      <button className="btn btn-tertiary" type="button">
        Tertiary
      </button>
    </div>
  );
};

export default App;
