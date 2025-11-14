'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

function Drawer(props: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props} />
}

function DrawerTrigger(props: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger {...props} />
}

function DrawerPortal(props: React.ComponentProps<typeof Dialog.Portal>) {
  return <Dialog.Portal {...props} />
}

function DrawerClose(props: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close {...props} />
}

function DrawerOverlay({ className, ...props }: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

type Direction = 'top' | 'bottom' | 'left' | 'right'

interface DrawerContentProps extends React.ComponentProps<typeof Dialog.Content> {
  direction?: Direction
}

function DrawerContent({ className, children, direction = 'right', ...props }: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <Dialog.Content
        data-direction={direction}
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[direction=top]:inset-x-0 data-[direction=top]:top-0 data-[direction=top]:mb-24 data-[direction=top]:max-h-[80vh] data-[direction=top]:rounded-b-lg data-[direction=top]:border-b',
          'data-[direction=bottom]:inset-x-0 data-[direction=bottom]:bottom-0 data-[direction=bottom]:mt-24 data-[direction=bottom]:max-h-[80vh] data-[direction=bottom]:rounded-t-lg data-[direction=bottom]:border-t',
          'data-[direction=right]:inset-y-0 data-[direction=right]:right-0 data-[direction=right]:w-3/4 data-[direction=right]:border-l data-[direction=right]:sm:max-w-sm',
          'data-[direction=left]:inset-y-0 data-[direction=left]:left-0 data-[direction=left]:w-3/4 data-[direction=left]:border-r data-[direction=left]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[direction=bottom]/drawer-content:block" />
        {children}
      </Dialog.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[direction=bottom]/drawer-content:text-center group-data-[direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle(props: React.ComponentProps<typeof Dialog.Title>) {
  return <Dialog.Title className={cn('text-foreground font-semibold')} {...props} />
}

function DrawerDescription(props: React.ComponentProps<typeof Dialog.Description>) {
  return <Dialog.Description className={cn('text-muted-foreground text-sm')} {...props} />
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
