import React from 'react';
import Link from 'next/link';
import { Cloud, CopySimple, Heart, InstagramLogo, List, Play, ShieldCheck } from 'phosphor-react';

import { Section } from '../layout/Section';
import { Feature } from './Feature';
import { Logo } from './Logo';
import { Bubbles } from './Particles';
import { DiscordClyde, TwitterBird } from './svgs/platforms';
import { Popover } from '@headlessui/react';

const HeaderLink: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <li>
    <Link href={link}>
      <a className="mx-3 font-semibold text-gray-300 hover:text-white">{text}</a>
    </Link>
  </li>
);

const DownloadButton: React.FC<{ link: string; name: string }> = (props) => (
  // eslint-disable-next-line @next/next/link-passhref
  <Link href={props.link}>
    <button className="m-1 mr-2 flex flex-row rounded-full px-4 py-2 text-black font-bold justify-center items-center  bg-primary-900 hover:bg-white">
      {props.name === 'macOS' && (
        <svg viewBox="0 0 842 1e3" height={23} className="mr-3">
          <path
            // fill="white"
            d="M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z"
          />
        </svg>
      )}
      {props.name === 'Windows' && (
        <svg viewBox="0 0 80 86" height={23} className="mr-3">
          <path
            d="M 0,12.40183 35.68737,7.5416 35.70297,41.96435 0.03321,42.16748 z m 35.67037,33.52906 0.0277,34.45332 -35.66989,-4.9041 -0.002,-29.77972 z M 39.99644,6.90595 87.31462,0 l 0,41.527 -47.31818,0.37565 z M 87.32567,46.25471 87.31457,87.59463 39.9964,80.91625 39.9301,46.17767 z"
            id="path13"
          />
        </svg>
      )}
      <span className="text-xl">Download for {props.name}</span>
    </button>
  </Link>
);

export const Hero: React.FC = () => (
  <div className="overflow-hidden relative">
    <div className="absolute-expand space-gradient" style={{ minWidth: 1200 }}>
      <Bubbles />
    </div>
    <div className="absolute-expand hero-bg" />
    <Section yPadding="p-5">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <Link href="/">
            <a>
              <Logo xl />
            </a>
          </Link>
        </div>
        <nav className="flex self-end">
          <Popover>
            <Popover.Button>
              <div className="navbar flex md:hidden items-center font-medium text-3xl mr-5 text-white">
                <List weight="bold" />
              </div>
            </Popover.Button>

            <Popover.Panel className="absolute md:hidden z-10 -ml-10 ">
              <ul className="grid grid-cols-1 space-y-3 bg-black rounded-xl text-white py-4 px-2">
                <HeaderLink text="Privacy" link="#" />
                <HeaderLink text="Pricing" link="#" />
                <HeaderLink text="Earn" link="#" />
                <HeaderLink text="Team" link="#" />
              </ul>
            </Popover.Panel>
          </Popover>
          <ul className="navbar hidden md:flex items-center font-medium text-xl text-white">
            <HeaderLink text="Privacy" link="#" />
            <HeaderLink text="Pricing" link="#" />
            <HeaderLink text="Earn" link="#" />
            <HeaderLink text="Team" link="#" />
            <div className=" mx-5 flex flex-row">
              <Link href="https://instagram.com/spacedropco">
                <a target="_blank">
                  <InstagramLogo
                    weight="fill"
                    className="opacity-80 h-9 w-7 mr-4 hover:opacity-100 fill-current"
                  />
                </a>
              </Link>
              <Link href="https://discord.gg/HcJS7rmJMM">
                <a target="_blank">
                  <DiscordClyde className="opacity-80 h-9 w-7 mr-4 hover:opacity-100  fill-current" />
                </a>
              </Link>
              <Link href="https://twitter.com/spacedropco">
                <a target="_blank">
                  <TwitterBird className="opacity-80 h-9 w-7 hover:opacity-100  fill-current" />
                </a>
              </Link>
              <Link href="https://twitter.com/spacedropco">
                <button className="border-2 rounded-full px-3 font-semibold ml-7">
                  Join Waitlist
                </button>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </Section>

    <Section yPadding="pt-5 md:pt-10 pb-40">
      <header className="text-center">
        <h1 className="text-5xl leading-none md:text-6xl mx-5 md:mx-0 text-white font-black whitespace-pre-line hero-text-shadow">
          Share files with a keybind
        </h1>
        <div className="text-white font-medium text-1xl md:text-2xl my-6 md:my-10">
          Just press <span className="button-border">CTRL</span> +{' '}
          <span className="button-border">Space</span> then drop!
        </div>
      </header>
      <div className="flex justify-center">
        <img alt="appui" height={432} width={700} className="mb-5" src="/assets/images/appui.png" />
      </div>
      <div className="flex justify-center mb-2">
        <div
          onClick={() =>
            alert(
              'You are very early, download will be ready in a few days. Join the Discord to be notified!'
            )
          }
          className="flex flex-col md:flex-row "
        >
          <DownloadButton link="#" name="macOS" />
          <DownloadButton link="#" name="Windows" />
        </div>
      </div>
      <p className="text-center text-white opacity-50 mb-6">iOS, Android & Linux coming soon!</p>
      <div className="flex flex-grow flex-wrap">
        <Feature
          icon={Heart}
          title="Only there when you need"
          description="Spacedrop integrates with your OS, just press the keybind to reveal the drop UI."
        />
        <Feature
          icon={ShieldCheck}
          title="End-to-end encrypted"
          description="File transfers are secured with the Signal Protocol, the most secure end-to-end encrypted messaging system around today."
        />
        <Feature
          icon={Play}
          title="Auto resume"
          description="Sending large files? Transfers will pause and resume again if your connection drops."
        />
        <Feature
          icon={CopySimple}
          title="Clone clipboard"
          description="Clone the contents of your clipboard with a contact in one click, great for sharing quick information with a friend or co-worker."
        />
        <Feature
          icon={Cloud}
          title="Cloud support"
          description="Connect Dropbox or Google Drive* so you can receive files offline. *we're adding more!"
        />
        {/* <Feature
          icon={Question}
          title="Temporary drop zone"
          description="Can’t see who you want to send to yet? Need to group files together to send at once? Drop in the grey space between to queue a transfer."
        /> */}
      </div>
    </Section>
  </div>
);
