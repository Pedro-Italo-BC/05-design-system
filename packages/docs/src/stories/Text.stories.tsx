import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextPorps } from '@pi-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Exemple text',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],

      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextPorps>

export const Primary: StoryObj<TextPorps> = {}

export const CustomTag: StoryObj<TextPorps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
