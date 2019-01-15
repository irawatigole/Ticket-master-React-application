import React from 'react';
import axios from 'axios';
import TicketTable from './ticketsTable';

class Tickets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tickets: [],
            serachText:'',
            filteredTickets: []
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDelete(e){
        const code = e.target.dataset.code;
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=bc2b7c3236801740`).then((response) => {
        const remainingTickets = this.state.tickets.filter(ticket => ticket.ticket_code !== code);
            this.setState({
                filteredTickets: [...remainingTickets],
                tickets: [...remainingTickets]
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    componentDidMount() {
        axios.get('http://dct-api-data.herokuapp.com/tickets/?api_key=bc2b7c3236801740').then((response) => {
            const ticketsAPI = response.data;
            this.setState({
                tickets: ticketsAPI,
                filteredTickets: ticketsAPI
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    handleSearchChange(e){
        e.persist();
        this.setState(prevState => ({
            serachText: e.target.value,
            filteredTickets: prevState.tickets.filter(ticket => 
                ticket.ticket_code.indexOf(e.target.value) >= 0)       
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: e.target[0].value,
            department: e.target[1].value,
            priority: e.target[2].value,
            message: e.target[3].value
        }
        axios.post('http://dct-api-data.herokuapp.com/tickets/?api_key=bc2b7c3236801740', formData).then((response) => {
            const freshTickets = [...this.state.tickets, response.data]
            this.setState(prevState => ({
                tickets: freshTickets,
                filteredTickets: freshTickets
            }))
        }).catch((err) => {
            console.log(err);
        })
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="search by code" value={this.state.serachText} onChange={this.handleSearchChange.bind(this)}/> <br/>
                <button> All </button>
                <button> High </button>
                <button> Medium </button>
                <button> Low </button>
                <h2>Listing tickets - {this.state.filteredTickets.length}</h2>
                <TicketTable tickets={this.state.filteredTickets} handleDelete={this.handleDelete} />
            
                
                <progress>

                </progress>
                <form onSubmit={this.handleSubmit}>
                    <label>Name <input type="text" /></label><br/>
                    <label> Department 
                        <select>
                            <option value=""> Select</option>
                            <option value="Technical"> Technical </option>
                            <option value="Sales"> Sales </option>
                            <option value="Hr"> Hr </option>
                        </select>
                    </label><br/>
                    <label>Priority
                        <select>
                            <option value=""> Select </option>
                            <option value="High"> High </option>
                            <option value="Medium"> Medium </option>
                            <option value="Low"> Low </option>
                        </select>
                    </label><br/>
                    <label>Message
                        <textarea>

                        </textarea>
                    </label><br/>
                    <input type="submit" value="Add Ticket" />

                </form>
            </div>
        )
    }
}

export default Tickets;