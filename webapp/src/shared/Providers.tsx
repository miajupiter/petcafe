"use client"

import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

export const Providers = ({
  children,
  session,
}: React.PropsWithChildren<{ session: Session | null }>) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
