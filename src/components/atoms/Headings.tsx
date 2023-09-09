import React from 'react';

type HeadingsProps = {
  heading: string;
  children: React.ReactNode;
};

export default function HeadingsComponent({
  heading,
  children,
}: HeadingsProps) {
  switch (heading) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    default:
      return null;
  }
}
