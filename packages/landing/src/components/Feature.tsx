import React from 'react';

type IFeatureProps = {
  icon?: any;
  title: string;
  description: string;
};

const Feature = (props: IFeatureProps) => {
  return (
    <div
      style={{ backgroundColor: '#9953F1', minWidth: 200 }}
      className="flex-1 self-start p-5 m-3 rounded-2xl shadow-lg text-white"
    >
      {props.icon && <props.icon className="mb-2" weight="bold" size={30} />}
      <h2 className="font-bold text-2xl">{props.title}</h2>
      <p className="text-lg mt-1">{props.description}</p>
    </div>
  );
};

export { Feature };
