import React from 'react';
import { CheckCircle } from 'phosphor-react';

interface Benefit {
  description: string;
}

interface PriceListingProps {
  cost: number;
  rate: 'monthly' | 'none';
  name: string;
  benefits: Benefit[];
}

export const PriceListing: React.FC<PriceListingProps> = (props) => {
  return (
    <div className="rounded-2xl flex justify-center p-10 shadow-lg m-10">
      <div>
        <h1>${props.cost}</h1>
        <p>{props.rate}</p>
        {props.benefits.map((benefit) => (
          <PriceBenefit benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

interface PriceBenefitProps {
  benefit: Benefit;
}

export const PriceBenefit: React.FC<PriceBenefitProps> = (props) => {
  return (
    <div>
      <CheckCircle />
      <h1>{props.name}</h1>
    </div>
  );
};
