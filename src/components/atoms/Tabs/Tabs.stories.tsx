import * as React from 'react';
import { Tabs } from './Tabs';
import { exportStory } from 'libs';

export default {
  title: exportStory('Tabs', 'atoms'),
  component: Tabs,
};

export const regular = (): React.ReactElement => {
  const [active, setActive] = React.useState('first');

  const data = [
    {
      label: <span>First tab</span>,
      key: 'first',
      content: <span>Content First tab</span>,
    },
    {
      label: <span>Second tab</span>,
      disabled: true,
      key: 'second',
      content: <span>Content Second tab</span>,
    },
    {
      label: <span>Third tab</span>,
      disabled: false,
      key: 'third',
      content: <span>Content Third tab</span>,
    },
    {
      label: <span>Fourth tab</span>,
      disabled: true,
      key: 'fourth',
      content: <span>Content Fourth tab</span>,
    },
  ];
  return (
    <div>
      <Tabs activeTab={active} setActiveTab={setActive}>
        {data.map(item => (<Tabs.Tab key={item.key} tabKey={item.key} label={item.label} disabled={item.disabled} />))}
        {data.map(item => (<Tabs.Panel key={item.key} tabKey={item.key}>{item.content}</Tabs.Panel>))}
      </Tabs>
    </div>
  );
};
