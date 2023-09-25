/** @jsxImportSource @emotion/react */
'use client';

import { usePathname } from 'next/navigation';

export default function Route() {
  const pathname = usePathname();

  return pathname;
}
