import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary Button', variant: 'primary', size: 'md' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Secondary', variant: 'secondary', size: 'md' };

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button size='sm'>Small</Button>
    <Button size='md'>Medium</Button>
    <Button size='lg'>Large</Button>
  </div>
);