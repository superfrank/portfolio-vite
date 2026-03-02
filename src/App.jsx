import Logo from "./components/Logo";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <>
      <Logo href="/" variant="default" context="home" />
      <HomePage />
    </>
  );
};

export default App;
