import type { Meta, StoryObj } from "@storybook/angular";

import { ArticleListsComponent } from "./article-lists.component";

const meta: Meta<ArticleListsComponent> = {
  component: ArticleListsComponent,
}

export default meta;

type Story = StoryObj<ArticleListsComponent>

export const Primary: Story = {
  name: 'Default Article List',

  render: () => ({
    props: {

    }
  })
}

export const AskArticleList: Story = {
  name: 'Ask Article List',

  render: () => ({
    props: {}
  })
}

export const BestArticlesList: Story = {
  name: 'Best Articles List',

  render: () => ({
    props: {}
  })
}

export const NewArticlesList: Story = {
  name: 'New Articles List',

  render: () => ({
    props: {}
  })
}

export const ShowArticlesList: Story = {
  name: 'Show Articles List',

  render: () => ({
    props: {}
  })
}

export const TopArticlesList: Story = {
  name: 'Top Articles List',

  render: () => ({
    props: {}
  })
}
