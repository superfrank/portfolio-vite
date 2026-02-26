import Logo from "./components/Logo";
import AboutIntro from "./components/AboutIntro";

const App = () => {
  return (
    <>
      <Logo href="/" variant="default" home />
      <main>
        <AboutIntro />
        {/* <h1 className="site-name">Frank Hulley-Jones</h1> */}
      </main>
    </>
  );
};

export default App;
