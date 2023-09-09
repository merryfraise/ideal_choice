import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/organisms/Header';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '아마도 이상적인 선택들',
  description:
    '인간보다 이상적인 존재의 선택을 통해 우리는 더 멋진 세계를 만들어갈 수 있다.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
