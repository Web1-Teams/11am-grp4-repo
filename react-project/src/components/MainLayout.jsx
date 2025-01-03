import React from 'react'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <nav>here is navbar</nav>
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer>here is footer</footer>
        </div>
    )
}