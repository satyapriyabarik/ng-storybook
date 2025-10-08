import React from 'react';
import SearchBox from './SearchBox';

export default {
    title: 'Components/SearchBox',
    component: SearchBox,
    argTypes: {
        suggestions: { control: 'object' },
    },
};

const Template = (args) => <SearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    suggestions: ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange', 'Pineapple'],
};
