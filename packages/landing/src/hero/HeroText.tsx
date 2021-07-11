import { ReactNode } from 'react';

type IHeroTextProps = {
  title: ReactNode;
  description: string;
};

const HeroText = (props: IHeroTextProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>
  </header>
);

export { HeroText };
