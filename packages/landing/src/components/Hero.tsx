import Link from 'next/link';
import { CopySimple, Download, Pause, Question, ShieldCheck } from 'phosphor-react';
import { Button, Icon } from 'semantic-ui-react';

import { Section } from '../layout/Section';
import { Feature } from './Feature';
import { Logo } from './Logo';
import { Bubbles } from './Particles';

const HeaderLink: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <li>
    <Link href={link}>
      <a className="mx-2 font-medium text-gray-300 hover:text-white">{text}</a>
    </Link>
  </li>
);

const Hero = () => (
  <div className="overflow-hidden relative">
    <div className="absolute-expand space-gradient" style={{ minWidth: 900 }}>
      <Bubbles />
    </div>
    <div className="absolute-expand hero-bg" />
    <Section yPadding="py-6 px-5">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <Link href="/">
            <a>
              <Logo xl />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="hidden navbar flex items-center font-medium text-xl text-white">
            <HeaderLink text="Privacy" link="#" />
            <HeaderLink text="Pricing" link="#" />
            <HeaderLink text="Earn" link="#" />
            <HeaderLink text="Team" link="#" />
            <HeaderLink text="Discord" link="#" />
          </ul>
        </nav>
      </div>
    </Section>

    <Section yPadding="pt-5 md:pt-10 pb-32">
      <header className="text-center">
        <h1 className="text-5xl leading-none md:text-6xl mx-5 md:mx-0 text-white font-black whitespace-pre-line hero-text-shadow">
          The fastest way to send files anywhere.
        </h1>
        <div className="text-white font-medium text-1xl md:text-2xl my-6 md:my-10">
          Just press <span className="button-border">CTRL</span> +{' '}
          <span className="button-border">Space</span> then drop!
        </div>
      </header>
      <div className="flex justify-center">
        <img alt="appui" width={700} className="mb-5" src="/assets/images/appui.png" />
      </div>
      <div className="flex justify-center mb-2">
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <Link href="#">
            <a className="m-1">
              <Button size="large" className="w-full">
                <Icon color="black" name="apple" size="large" style={{ marginTop: -7 }} /> Download
                For MacOS
              </Button>
            </a>
          </Link>
          <Link href="#">
            <a className="m-1">
              <Button size="large" className="w-full">
                <Icon color="black" name="windows" size="large" style={{ marginTop: -7 }} />
                Download For Windows
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <p className="text-center text-white opacity-50 mb-6">iOS, Android & Linux coming soon!</p>
      <div className="flex flex-grow flex-wrap">
        <Feature
          icon={ShieldCheck}
          title="End-to-end encryption"
          description="File transfers are secured with the Signal Protocol, the most secure end-to-end encrypted messaging system in existence."
        />
        <Feature
          icon={Pause}
          title="Auto resume"
          description="Sending large files? Transfers will pause and resume again if your connection drops."
        />
        <Feature
          icon={CopySimple}
          title="Clone clipboard"
          description="Clone the contents of your clipboard with a contact in one click, great for sharing quick information with a friend or co-worker."
        />
        <Feature
          icon={Download}
          title="Download later"
          description="We don’t store your files on our servers. Unless you want to send a file to an offline contact, in which case we’ll keep it (encrypted) until they’re back online to receive it."
        />
        <Feature
          icon={Question}
          title="Temp drop"
          description="Can’t see who you want to send to yet? Need to group files together to send at once? Drop in the grey space between to queue a transfer."
        />
      </div>
    </Section>
  </div>
);

export { Hero };
