import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div className="container">
                <li>
                    <ul className="row"><h3>Today</h3></ul>
                    <ul className="row"><h3>Calendar</h3></ul>
                    <ul className="row"><h3>Settings</h3></ul>
                    <ul className="row"><h3>Add Record</h3></ul>
                </li>
            </div>
        </nav>
    )
}
