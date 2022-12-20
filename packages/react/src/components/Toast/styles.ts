import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const VIEWPORT_PADDING = 32

const hide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  });
  
  const slideIn = keyframes({
    from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
    to: { transform: 'translateX(0)' },
  });
  
  const swipeOut = keyframes({
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  });


export const ToastContainer = styled(Toast.Root, {
    padding: '$4 $5',
    backgroundColor: '$gray800',
    border: '1px solid $gray600',
    borderRadius: '$sm',
    display: 'inline-flex',
    justifyContent: 'space-between',
    width: '$80',

    '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
      },
      '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
      },
      '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out',
      },
      '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
      },
})

export const ToastContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1'
})

export const ToastTitle = styled(Toast.Title, {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$xl',
    lineHeight: '$base',
    color: '$white'
})

export const ToastDescription = styled(Toast.Description, {
    color: '$gray200',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$shorter'
})

export const ToastClose = styled(Toast.Close, {
    all: 'unset',
    height: '$5',
    width: '$5',
    
    svg: {
        color: '$gray200',
        height: '$5',
        width: '$5',
    },

    '&:hover': {
        cursor: 'pointer',
    }
})

export const ToastViewport = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: '$8',
    right: '$8',
    display: 'flex',
    flexDirection: 'column',
    padding: '$6',
    gap: '$2',
    width: '$80',
    margin: 0,
    listStyle: 'none',
    zIndexndex: 2,
    outline: 'none'
})

