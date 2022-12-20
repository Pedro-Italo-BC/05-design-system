import {TooltipContent, TooltipArrow} from './styles'
import {ReactNode, ComponentProps} from 'react'

import * as TooltipLib from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipLib.Root> {
    content: string | ReactNode,
    gap: number,
    side: 'top' | 'bottom' | 'left' | 'right'
}

export function Tooltip({children, content, gap = 2, side = 'top',...props}: TooltipProps) {
    return (
        <TooltipLib.Provider>
            <TooltipLib.Root {...props}>
                <TooltipLib.Trigger asChild>
                   {children}
                </TooltipLib.Trigger>

                <TooltipLib.Portal>
                    <TooltipContent sideOffset={gap} side={side} >
                        {content}
                         <TooltipArrow/>
                    </TooltipContent>
                </TooltipLib.Portal>
            </TooltipLib.Root>
        </TooltipLib.Provider>
    )
}