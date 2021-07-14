import React, { useState } from 'react';

import { Accordion } from 'semantic-ui-react';

interface FAQProps {
  data: { q: string; a: string }[];
}

export const FAQ: React.FC<FAQProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (_: any, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
  return (
    <div className="max-w-screen-xl mx-auto px-3 pt-10 pb-10">
      <Accordion style={{ margin: 10 }}>
        {props.data.map((item, index) => (
          <>
            <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
              {/* <Icon name="dropdown" /> */}
              {item.q}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              <p>{item.a}</p>
            </Accordion.Content>
          </>
        ))}
      </Accordion>
    </div>
  );
};
