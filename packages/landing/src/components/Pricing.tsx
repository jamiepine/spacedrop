import React from 'react';
import { CheckCircle } from 'phosphor-react';
import Link from 'next/link';

interface Benefit {
  title: string;
}

export const PriceButton: React.FC<{ primaryBGColor?: string }> = (props) => {
  return (
    <Link href="/">
      <a>
        <div
          className={`flex flex-row justify-center rounded-3xl px-2 py-2 ${props.primaryBGColor} mt-5`}
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
      <CheckCircle size={20} weight="bold" className={`${props.primaryTextColor} mr-2`} />
      <h1>{props.benefit.title}</h1>
    </div>
  );
};

interface PriceListingProps {
  cost?: number;
  recommended?: boolean;
  rate: 'monthly' | 'none';
  name: string;
  benefits: Benefit[];
}

export const PriceListing: React.FC<PriceListingProps> = (props) => {
  const primaryTextColor = props.recommended ? 'text-primary-100' : 'text-black';
  const primaryBGColor = props.recommended ? 'bg-primary-100' : 'bg-black';
  return (
    <div className="flex relative self-start rounded-3xl bg-white md:w-80 p-7 justify-center shadow-lg m-2 mb-5 ">
      <div>
        {props.recommended && (
          <div className="rounded-3xl -my-10 absolute px-3 py-1 bg-primary-100 text-white font-bold">
            MOST POPULAR
          </div>
        )}
        <h1 className={`text-5xl text-center font-bold ${primaryTextColor}`}>
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
        <PriceButton primaryBGColor={primaryBGColor}>Create Account</PriceButton>
      </div>
    </div>
  );
};