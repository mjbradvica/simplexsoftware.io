import { Button, Container, Title, TitleType } from "../components";

const App: React.FC = () => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(event);
  };

  return (
    <Container>
      <Title content="Simplex-Software.io" titleType={TitleType.One} />
      <Button content="Primary" onClick={handleOnClick} />
    </Container>
  );
};

export default App;
