import { Button } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Mui/Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hover' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}></Button>
)

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  children: 'Text',
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  children: 'Contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'contained',
  children: 'Success',
  color: 'success',
}
export const Warning = Template.bind({})
Warning.args = {
  variant: 'contained',
  children: 'Warning',
  color: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  variant: 'contained',
  children: 'Error',
  color: 'error',
  disabled: false,
}
