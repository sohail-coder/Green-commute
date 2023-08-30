import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AutoCompleteDropDown from "components/molecules/AutoCompleteDropDown";

export default{
    title:"Molecules/AutoCompleteDropDown",
    component:AutoCompleteDropDown
}as ComponentMeta<typeof AutoCompleteDropDown>;

const Template: ComponentStory<typeof AutoCompleteDropDown> = (args) => <AutoCompleteDropDown  {...args} />;

export const autoComplete = Template.bind({});

autoComplete.args = {
    options:["hello","hi"],
    placeHolder:"Enter text"
};