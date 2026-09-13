import React, { createContext, useContext, useState, useEffect } from 'react';
import { scrollToTarget } from './hooks/useLenis';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (url, options = {}) => {
    if (!url) return;

    // External link
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) {
      window.open(url, '_blank');
      return;
    }

    // Anchor on same page
    if (url.startsWith('#')) {
      if (path !== '/') {
        // If not on home, push home with hash
        window.history.pushState({}, '', '/' + url);
        setPath('/');
        setTimeout(() => {
          scrollToTarget(url, -80);
        }, 80);
      } else {
        scrollToTarget(url, -80);
      }
      return;
    }

    // Path navigation
    if (url !== path) {
      window.history.pushState({}, '', url);
      setPath(url);
      window.scrollTo(0, 0);
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ href, children, className, onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
