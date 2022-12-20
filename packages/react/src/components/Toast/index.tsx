import * as ToastLib from '@radix-ui/react-toast'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import {ToastClose,ToastContainer,ToastDescription,ToastTitle, ToastContent, ToastViewport} from './styles'
import { Button } from '../Button'

import {X} from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string,
  description: string,
}

export function Toast({description, title, children, ...props}: ToastProps) {
    const [open, setOpen] = useState(false)

    const timeRef = useRef(0)

    useEffect(() => {
      return () => clearTimeout(timeRef.current)
    }, [])

    return(
        <ToastLib.Provider swipeDirection={'right'}>
          <Button onClick={() => {
            setOpen(false)

            window.clearTimeout(timeRef.current)
            timeRef.current = window.setTimeout(() => setOpen(true), 100)

            
          }}>{children}</Button>
        <ToastContainer open={open} onOpenChange={setOpen} {...props}>
        <ToastContent>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </ToastContent> 

        <ToastClose><X/></ToastClose>
        </ToastContainer>
        <ToastViewport />
      </ToastLib.Provider>
    ) 
}