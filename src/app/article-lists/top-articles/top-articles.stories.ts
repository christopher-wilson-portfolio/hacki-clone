import { Meta, Story } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { TopArticlesComponent } from "./top-articles.component";

export default {
  component: TopArticlesComponent,
  title: 'Top Articles',
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
  }
});

export const Default = Template.bind({});
Default.args = {};
