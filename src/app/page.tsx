import Image from 'next/image';
import mainImg from '../../public/images/main_bg.png';

export default function Home() {
  return <Image src={mainImg} alt="background image" fill />;
}
