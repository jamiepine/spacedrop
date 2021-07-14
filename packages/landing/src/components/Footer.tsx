import Link from 'next/link';
import { At, HandGrabbing, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';
import React from 'react';

import { Section } from '../layout/Section';
import { Background } from './Background';
import { CenteredFooter } from './footer/CenteredFooter';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<HandGrabbing size={60} className="-mt-3 m-auto" />}
        iconList={[
          { icon: YoutubeLogo, link: '' },
          { icon: TwitterLogo, link: '' },
          { icon: InstagramLogo, link: '' },
          { icon: At, link: '', weight: 'bold' }
        ].map((item) => (
          <>
            <Link href={item.link}>
              <a>
                {/* @ts-ignore */}
                <item.icon weight={item.weight || 'fill'} />
              </a>
            </Link>
          </>
        ))}
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Terms</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Privacy</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
