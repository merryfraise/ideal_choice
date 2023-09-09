import Headings from '../atoms/Headings';
import Navigation from '../molecules/Navigation';

export default function Header() {
  return (
    <header>
      <Headings heading="h1">아마도 이상적인 선택들</Headings>
      <Navigation />
    </header>
  );
}
