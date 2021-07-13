import { HandGrabbing } from 'phosphor-react';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <div>
      <span className={`text-white inline-flex items-center ${fontStyle}`}>
        <HandGrabbing size={40} className="-mt-3 mr-2" />
        Spacedrop
      </span>
    </div>
  );
};

export { Logo };
