type HeadingsProps = {
  heading: string;
  text: string;
};

export default function HeadingsComponent(props: HeadingsProps) {
  const heading = props.heading;

  switch (heading) {
    case 'h1':
      return <h1>{props.text}</h1>;
    case 'h2':
      return <h2>{props.text}</h2>;
    default:
      return null;
  }
}
