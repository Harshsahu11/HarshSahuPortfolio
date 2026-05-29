/// <reference types="vite/client" />

declare module 'react-scroll' {
  export const Link: React.ComponentType<{
    to: string
    smooth?: boolean
    duration?: number
    offset?: number
    spy?: boolean
    activeClass?: string
    className?: string
    onClick?: () => void
    children?: React.ReactNode
  }>
}
