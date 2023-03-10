import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@pi-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box Component</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
