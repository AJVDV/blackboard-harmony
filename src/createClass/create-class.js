import React, { Component } from 'react';
import Content from '../content/content';

class CreateClass extends Component {
    render () {
        return(
            <Content className="class_form">
                <h2>Put down the details of the class you wish to host.</h2>
                <label htmlFor="class_name">Class Name:</label>
                <input 
                    type="text"
                    name="class_name"
                    id="class_name"
                    placeholder="Class Name"
                    //value={this.state.class_name}
                    //onChange={e => this.classNameChanged(e.target.value)}
                />
                <label style={{ marginLeft: '.5rem' }} htmlFor="description">Description:</label>
                <input 
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Describe your class"
                    //value={this.state.last_name}
                    //onChange={e => this.lastNameChanged(e.target.value)}
                />
                <label style={{ marginLeft: '.5rem' }} htmlFor="meeting_place">Link to the Meeting Place:</label>
                <input 
                    type="url"
                    name="meeting_place"
                    id="meeting_place"
                    placeholder="Enter link to digital meeting room"
                    //value={this.state.meeting_room}
                    //onChange={e => this.meetingRoomChanged(e.target.value)}
                />
                <label style={{ marginLeft: '.5rem' }} htmlFor="meeting_date">Meeting Date:</label>
                <input 
                    type="date"
                    name="meeting_date"
                    id="meeting_date"
                    //value={this.state.meeting_date}
                    //onChange={e => this.meetingDateChanged(e.target.value)}
                />
                <label style={{ marginLeft: '.5rem' }} htmlFor="meeting_time">Meeting Time:</label>
                <input 
                    type="time"
                    name="meeting_time"
                    id="meeting_time"
                    //value={this.state.meeting_time}
                    //onChange={e => this.meetingTimeChanged(e.target.value)}
                />
            </Content>
        )
    }
}

export default CreateClass;