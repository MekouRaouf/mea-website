// === PRERENDER SAFETY PATCH ===
// Must be first - before any imports that touch the DOM
// @headlessui/react and @react-aria/* call classList.add() during
// module init, which crashes react-snap's old Chromium.
if (typeof document !== 'undefined') {
  const _origGetById = document.getElementById.bind(document);
  const _origQuery = document.querySelector.bind(document);
  
  // Wrap querySelector to return a safe proxy if classList is missing
  const safeElement = (el: Element | null) => {
    if (el && !el.classList) {
      (el as any).classList = {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false,
        replace: () => {},
      };
    }
    return el;
  };

  document.getElementById = (id: string) => safeElement(_origGetById(id)) as HTMLElement | null;
  document.querySelector = (sel: string) => safeElement(_origQuery(sel));
}
// === END PATCH ===

import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
} else {
  createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
}