import React from 'react'

export default function Nav() {
    return (
        <nav className="container my-5 left-align">
            <ul>
                <li className="row my-2"><h4>Today</h4></li>
                <li className="row my-2"><h4>Calendar</h4></li>
                <li className="row my-2"><h4>Settings</h4></li>
                <li className="row my-2"><h4>Add Record</h4></li>
                <li className="row my-2"><h4>Logout</h4></li>
            </ul>
        </nav>
    )
}
