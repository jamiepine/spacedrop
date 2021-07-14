import className from 'classnames';
import React, { HTMLProps } from 'react';

type IButtonProps = {
  xl?: boolean;
} & HTMLProps<HTMLDivElement>;

const Button: React.FC<IButtonProps> = (props) => {
  const { xl, ...rest } = props;

  const btnClass = className({
    'btn': true,
    'btn-xl': xl,
    'btn-base': !xl,
    'btn-primary': true
  });

  return (
    <div className={btnClass} role="button" {...rest}>
      {props.children}
      {/* @ts-ignore */}
      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-black;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
