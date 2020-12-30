import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Content from '../content/content'

export default class ClassMain extends Component {
    render() {
        return(
            <Content className="class_summary">
                <h1 className="className">Basic Chord Shapes</h1>
                <h2>Acoustic guitar</h2>
                <p>This class will take place at 2:15 pm on 2/12/21</p>
                <p>In this short intro class we will be practicing some basic chord shapes for the acoustic guitar! (most of these are applicable to electric as well ^.^)</p>
                <p>Teacher: Guitary McGuitarman (make the link to a teacher's account page)</p>
                <p>Students attending this class will be listed here</p>
            </Content>    
        )
    }
}