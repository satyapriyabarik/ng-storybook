import React from 'react';
import Icon from './Icon';

// List of all icon keys
const iconNames = ['close', 'check', 'menu', 'kart', 'plus', 'minus', 'thrash'];

export default {
    title: 'Components/Icons',
    component: Icon,
    argTypes: {
        name: { control: 'radio', options: iconNames },
        size: { control: 'text' },
        color: { control: 'color' },
    },
};

// Single icon story
export const Default = (args) => <Icon {...args} />;
Default.args = {
    name: 'close',
    size: '24px',
    color: '#000',
};

// Grid preview of all icons
export const AllIcons = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
            gap: '16px',
            alignItems: 'center',
        }}
    >
        {iconNames.map((name) => (
            <div
                key={name}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Icon name={name} size="32px" color="#333" />
                <span style={{ fontSize: '12px', marginTop: '4px' }}>{name}</span>
            </div>
        ))}
    </div>
);
