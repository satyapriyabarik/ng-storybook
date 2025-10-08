import React from 'react';
import Container from './Container';
export default {
    title: 'Layout/Container',
    component: Container,
    argTypes: {
        direction: {
            control: 'radio',
            options: ['row', 'column'],
        },
        justify: {
            control: 'select',
            options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
        },
        align: {
            control: 'select',
            options: ['stretch', 'flex-start', 'center', 'flex-end'],
        },
        gap: { control: 'text' },
        wrap: { control: 'boolean' },
    },
};

const Box = ({ label }) => (
    <div
        style={{
            background: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
        }}
    >
        {label}
    </div>
);

const Template = (args) => (
    <Container {...args}>
        <Box label="Box 1" />
        <Box label="Box 2" />
        <Box label="Box 3" />
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    gap: '12px',
    wrap: false,
};
