import React, { Component } from 'react'
import Content from '../content/content'

export default class Search extends Component{
    render() {
        return(
            <Content className="student_signin_form">
                <h2>Search For Classes</h2>
                <label htmlFor="search">Instrument:</label>
                <input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Instrument"
                    //value={this.state.last_name}
                    //onChange={e => this.lastNameChanged(e.target.value)}
                />
                    <ul>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                        <li>(probably will be a link to the class summary page)</li>
                    </ul>
            </Content>
        )
    }
}