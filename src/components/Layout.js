import Header from "./LandingPage/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default Layout;
