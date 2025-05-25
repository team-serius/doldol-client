'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ERROR_MESSAGES } from '@libs/utils/message';

export const useBlockRedirect = () => {
  const [activated, setActivated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [nextPath, setNextPath] = useState<string | null>(null);

  useEffect(() => {
    const warningText = ERROR_MESSAGES.blockRecirect;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!activated) return;
      e.preventDefault();
      e.returnValue = warningText;
    };

    const handleClick = (e: MouseEvent) => {
      if (!activated) return;

      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href && !target.target) {
        const url = new URL(target.href);
        if (url.origin === window.location.origin && url.pathname !== pathname) {
          const confirmed = window.confirm(warningText);
          if (!confirmed) {
            e.preventDefault();
            e.stopPropagation();
          } else {
            setNextPath(url.pathname);
          }
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleClick);
    };
  }, [activated, pathname]);

  useEffect(() => {
    if (nextPath && nextPath !== pathname) {
      router.push(nextPath);
    }
  }, [nextPath, pathname, router]);

  return {
    setRedirectBlock: setActivated,
  } as {
    setRedirectBlock: typeof setActivated;
  };
};
