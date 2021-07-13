import Link from 'next/link';

import { HeroText } from '../hero/HeroText';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { Logo } from './Logo';
import { Button } from 'semantic-ui-react';
const HeaderLink: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <li>
    <Link href={link}>
      <a>{text}</a>
    </Link>
  </li>
);

const Hero = () => (
  <div className="space-gradient">
    <div className="her o-bg">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <HeaderLink text="Product" link="#" />
          <HeaderLink text="Download" link="#" />
          <HeaderLink text="Company" link="#" />
          <HeaderLink text="Account" link="#" />
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <header className="text-center">
          <h1 className="text-5xl text-white font-black whitespace-pre-line leading-hero hero-text-shadow">
            The fastest way to send files anywhere
          </h1>
          <div className="text-white text-2xl mt-4 mb-16">Just press CTRL + Space then drop!</div>
        </header>
        <div className="flex justify-center">
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
  </div>
);

export { Hero };
