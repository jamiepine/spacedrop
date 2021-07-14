import React from 'react';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} Jamie Pine. Made with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    in Canada.
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    {/* @ts-ignore */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
