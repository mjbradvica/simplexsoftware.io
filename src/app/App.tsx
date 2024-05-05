import { Title, TitleType } from "../components";

const App: React.FC = () => {
  return (
    <div>
      <Title content="Simplex-Software.io" titleType={TitleType.One} />
      <button className="button is-tertiary" type="button">
        Hi there!
      </button>
    </div>
  );
};

export default App;
