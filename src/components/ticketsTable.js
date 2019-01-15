import React from 'react';

const TicketTable = (props) => {
    return (
        <table>
                    <thead>
                        <tr>
                            <th> Code </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th> Priority </th>
                            <th> Message </th>
                            <th> Status </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.tickets.map((ticket,index) => {
                            return (
                                <tr key={index}>
                                    <td> {ticket.ticket_code} </td>
                                    <td> {ticket.name} </td>
                                    <td> {ticket.department} </td>
                                    <td> {ticket.priority} </td>
                                    <td> {ticket.message} </td>
                                    <td> {ticket.status} </td>
                                    <td> <button onClick={props.handleDelete} data-code={ticket.ticket_code}> Delete </button></td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
    )
}

export default TicketTable;