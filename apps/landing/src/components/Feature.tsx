import React from 'react';

type IFeatureProps = {
  icon?: any;
  title: string;
  description: string;
};

const Feature = (props: IFeatureProps) => {
  return (
    <div
      style={{ minWidth: 200 }}
      className="flex-1 xl:self-start p-5 m-3 rounded-2xl shadow-lg text-white bg-primary-100"
    >
      {props.icon && (
        <props.icon className="mb-2  p-3 rounded-full bg-primary-200" weight="bold" size={60} />
      )}
      <h2 className="font-bold text-2xl leading-7">{props.title}</h2>
      <p className="text-lg mt-1">{props.description}</p>
    </div>
  );
};

export { Feature };
