import { styled } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Tooltip.Content, {
    backgroundColor: "$gray900",
    padding: '$3 $4',
    borderRadius: '$sm',
    color: '$gray100',
    fontWeight: '$medium',
    fontSize: '$sm',
    lineHeight: '$short',

    fontFamily: '$default'
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    fill: "$gray900"
})