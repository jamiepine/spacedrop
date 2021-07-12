import React from 'react';
import { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

interface FAQProps {
  data: { q: string; a: string }[];
}

export const FAQ: React.FC<FAQProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
  return (
    <Accordion style={{ margin: 10 }} styled>
      {props.data.map((item, index) => (
        <>
          <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
            <Icon name="dropdown" />
            {item.q}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>{item.a}</p>
          </Accordion.Content>
        </>
      ))}
    </Accordion>
  );
};
