import { Meta, StoryFn } from '@storybook/react'
import Card, { CardProps } from '../components/card/Card'

export default {
  title: 'Example/Card',
  component: Card,
} as Meta

const Template: StoryFn<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  image:
    'https://images.unsplash.com/photo-1700280761419-f37c16ab86fb?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Sample Card',
  description:
    'This is a description of the card. It provides additional details.',
}

export const CustomCard = Template.bind({})
CustomCard.args = {
  image:
    'https://images.unsplash.com/photo-1718520704252-fdbe24a4e6da?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Custom Card Title',
  description: 'Custom description for the card with different content.',
}
