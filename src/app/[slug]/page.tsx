import data from '@/database/data.json';
import Link from 'next/link';

type ChoicedPageProps = {
  params: {
    slug: string;
  };
};

export default function Choiced({ params }: ChoicedPageProps) {
  const choicedData = data.choice.filter(
    (choice) => choice.id.toString() === params.slug
  );

  return (
    <>
      {choicedData.map((data) => {
        <Link href={`/random/choice/${params.slug}/hidden`}>{data.bard}</Link>;
      })}
    </>
  );
}
