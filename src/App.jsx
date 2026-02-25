import Logo from "./components/Logo";
import AboutIntro from "./components/AboutIntro";

export default function App() {
  return (
    <>
      <Logo href="/" variant="default" home />
      <main className="wrapper">
        <AboutIntro />
        {/* <h1 className="site-name">Frank Hulley-Jones</h1> */}
      </main>
    </>
  );
}
