import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from '../components/button/Button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  label: 'Secondary Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Large Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Small Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
}
