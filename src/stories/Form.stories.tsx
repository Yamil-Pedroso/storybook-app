import { Meta, StoryFn } from '@storybook/react'
import Form, { FormProps } from '../components/form/Form'

export default {
  title: 'Example/Form',
  component: Form,
} as Meta

const Template: StoryFn<FormProps> = (args) => <Form {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Default Label',
  placeholder: 'Default Placeholder',
  btnText: 'Default Button',
}
