"use client"

import { SessionProvider } from "next-auth/react"

const SessionFalarohy = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default SessionFalarohy