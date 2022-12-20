import {StoryObj, Meta} from '@storybook/react'
import { Tooltip, TooltipProps, Box, Button} from '@pi-ignite-ui/react'

export default {
    title: "Form/Tooltip",
    component: Tooltip,
    args: {
        content: "Date something",
        children: <Button>Something</Button>,
        gap: 2,
        side: 'top'
    },

    argTypes: {
        children: {
            control: {
                type: null
            }
        },
        side: {
            options: ['top', 'left', 'bottom', 'right'],
            control: {
                type: 'inline-radio'
            }
        }
    } ,

    decorators: [
        (Story) => {
            return (
                <Box css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    padding: '$20',
                    backgroundColor: '$gray600'
                }}>
                    {Story()}
                </Box>
            ) 
        }
    ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
    
}