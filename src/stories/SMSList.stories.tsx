import { Meta, StoryFn } from '@storybook/react'
import SMSList from '../components/sms-list/SMSList'

export default {
  title: 'Example/SMSList',
  component: SMSList,
} as Meta

// Definir la plantilla
const Template: StoryFn = (arg) => <SMSList {...arg} />

// Crear la historia "Default"
export const Default = Template.bind({})
Default.args = {}
