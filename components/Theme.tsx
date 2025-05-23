'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'


export default function Theme() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {

        const storedTheme = localStorage.getItem('theme')
        if (
            storedTheme === 'dark' ||
            (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="border bg-oranground/10 border-oranground text-oranground rounded-sm p-2 px-3"
        >
            {theme === 'light' ? <Moon />  : <Sun />}
        </button>
    )
}
