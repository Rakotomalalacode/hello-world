"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { IoLogOutOutline } from "react-icons/io5"

export default function LogoutBtn() {
    const router = useRouter()

    const handleLogout = async () => {
        await signOut({ redirect: false })
        router.push("/auth?return=#auth_#")
    }

    return (
        <button onClick={handleLogout} className="flex justify-between items-center px-2 py-1 w-full">
            Déconnexion
            <p><IoLogOutOutline /></p>
        </button>
    )
}
