import Link from 'next/link';
import { Button } from 'semantic-ui-react';

import { Section } from '../layout/Section';
import { Logo } from './Logo';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { Bubbles } from './Particles';

const HeaderLink: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <li>
    <Link href={link}>
      <a>{text}</a>
    </Link>
  </li>
);

const Hero = () => (
  <div className="overflow-hidden relative">
    <div className="absolute-expand space-gradient">
      <Bubbles />
    </div>
    <div className="absolute-expand hero-bg" />
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <HeaderLink text="Download" link="#" />
        <HeaderLink text="Earn" link="#" />
        <HeaderLink text="Company" link="#" />
        <HeaderLink text="Account" link="#" />
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <header className="text-center">
        <h1 className="text-6xl text-white font-black whitespace-pre-line leading-hero hero-text-shadow">
          The fastest way to send files anywhere
        </h1>
        <div className="text-white font-medium text-2xl my-6">
          Just press <span className="button-border">CTRL</span> +{' '}
          <span className="button-border">Space</span> then drop!
        </div>
      </header>
      <div className="flex justify-center">
        <img alt="appui" width={700} className="mb-5" src="/assets/images/appui.png" />
      </div>
      <div className="flex justify-center mb-96">
        <div className="flex flex-wrap content-around">
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a className="pr-4">
              <Button xl>Download For MacOS</Button>
            </a>
          </Link>
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download For Windows</Button>
            </a>
          </Link>
        </div>
      </div>
    </Section>
  </div>
);

export { Hero };
