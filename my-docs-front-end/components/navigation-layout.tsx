import { ReactNode } from "react"
import { Navigation } from "./navigation"

export const NavigationLayout = ({ children }: { children: ReactNode }) => {
    return <div>
        <Navigation />
        {children}
    </div>
}