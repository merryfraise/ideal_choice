import React from 'react';

type ChoiceLayoutProps = {
  children: React.ReactNode;
};

export default function ChoiceLayout({ children }: ChoiceLayoutProps) {
  return (
    <section>
      <aside></aside>
      <article></article>
    </section>
  );
}
