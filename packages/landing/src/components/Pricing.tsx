import React from 'react';
import { CheckCircle } from 'phosphor-react';
import Link from 'next/link';

interface Benefit {
  title: string;
}

export const PricingContainer: React.FC = (props) => (
  <div className="pt-10 -mt-40 justify-center flex flex-row flex-wrap ">{props.children}</div>
);

export const PriceButton: React.FC<{ primaryBGColor?: string }> = (props) => {
  return (
    <Link href="/">
      <a>
        <div
          className={`flex flex-row justify-center rounded-full px-2 py-2 ${props.primaryBGColor} mt-5`}
        >
          <h1 className="text-white text-2xl font-bold text-center">{props.children}</h1>
        </div>
      </a>
    </Link>
  );
};

interface PriceBenefitProps {
  benefit: Benefit;
  primaryTextColor?: string;
}

export const PriceBenefit: React.FC<PriceBenefitProps> = (props) => {
  return (
    <div className="flex flex-row text-lg font-semibold text-black mb-2">
      <CheckCircle
        weight="bold"
        className={`text-xl flex-shrink-0 mt-1 ${props.primaryTextColor} mr-2`}
      />
      <h1>{props.benefit.title}</h1>
    </div>
  );
};

interface PriceListingProps {
  cost?: number;
  recommended?: boolean;
  rate?: 'monthly' | 'none';
  name: string;
  benefits: Benefit[];
}

export const PriceListing: React.FC<PriceListingProps> = (props) => {
  const primaryTextColor = props.recommended ? 'text-primary-100' : 'text-black';
  const primaryBGColor = props.recommended ? 'bg-primary-100' : 'bg-black';
  return (
    <div className="flex relative self-start rounded-3xl bg-white w-full my-6 mx-6 md:mx-2 md:w-80  p-7 justify-center shadow-2xl">
      {props.recommended && (
        <div className="absolute shadow-md object-center rounded-3xl -my-10 px-3 py-1 bg-primary-100 text-white font-bold">
          MOST POPULAR
        </div>
      )}
      <div className="flex-grow">
        <h1 className={` text-5xl text-center font-black ${primaryTextColor}`}>
          {props.cost ? `$${props.cost}` : 'Free'}
        </h1>
        <p className="text-center">{props.rate}</p>
        <div className="mt-3 ">
          {props.benefits.map((benefit) => (
            <PriceBenefit
              key={benefit.title}
              primaryTextColor={primaryTextColor}
              benefit={benefit}
            />
          ))}
        </div>
        <PriceButton primaryBGColor={primaryBGColor}>
          {props.cost ? 'Choose Plan' : 'Download'}
        </PriceButton>
      </div>
    </div>
  );
};
