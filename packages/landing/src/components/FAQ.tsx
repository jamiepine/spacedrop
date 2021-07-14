import React from 'react';
import {
  Disclosure
  // Transition
} from '@headlessui/react';
// import { CaretRight } from 'phosphor-react';

interface FAQProps {
  data: { q: string; a: string }[];
}

export const FAQ: React.FC<FAQProps> = (props) => {
  const [active, setActive] = React.useState<number>(-1);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col px-5 pt-10 pb-10">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>

      <ul className="list-none border border-gray-300 rounded-lg">
        {props.data.map((item, index) => (
          <Disclosure
            key={index}
            defaultOpen={false}
            as="li"
            className="flex flex-col border-b border-gray-300"
            // style={{ margin: 10 }}
          >
            <Disclosure.Button
              onClickCapture={() => setActive(index === active ? -1 : index)}
              className="flex px-5 py-4 text-black font-bold text-xl"
            >
              {item.q}
            </Disclosure.Button>

            {index === active && (
              // <Transition
              //     show={open}
              //     enter="transition-all"
              //     enterFrom="h-0"
              //     enterTo="h-auto"
              //     leave="transition-all"
              //     leaveFrom="h-auto"
              //     leaveTo="h-0"
              //   >
              <Disclosure.Panel static className="px-5 py-5 bg-gray-100 text-black transition-all">
                <p>{item.a}</p>
              </Disclosure.Panel>
              // {/* </Transition> */}
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
  );
};
