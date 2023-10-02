import React from 'react';

type HeadingsProps = {
  heading: string;
  children: React.ReactNode;
  key?: number;
};

export default function Headings({ heading, children }: HeadingsProps) {
  switch (heading) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    default:
      return null;
  }
}
