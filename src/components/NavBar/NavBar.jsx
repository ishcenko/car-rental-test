import { Header, Navigation, Link } from './NavBar.styled';

export default function NavBar() {
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorit">Favorit</Link>
        </Navigation>
      </Header>
    </>
  );
}
