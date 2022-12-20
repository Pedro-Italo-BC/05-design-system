import {StoryObj, Meta} from '@storybook/react'
import {Toast, ToastProps, Box} from '@pi-ignite-ui/react'

export default {
    title: "Form/Toast",
    component: Toast,
    args: {
        children: 'Realizar agendamento',
        title: 'Agendamento Realizado',
        description: 'Quarta-feira, 23 de Outubro às 16h'
    },
    decorators: [
        (Story) => {
            return(
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
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    
}