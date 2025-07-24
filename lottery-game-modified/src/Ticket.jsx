import "./Ticket.css"

import TicketNum from "./TicketNum"

export default function Ticket({ ticket }) {

    return (
        <div className="ticket">
            <p>Ticket</p>
            {
                ticket.map((val, idx) => (
                    <TicketNum num={val} key={idx}/>
                ))
            }
        </div>
    )
}