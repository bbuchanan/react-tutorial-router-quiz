import React, { Component } from 'react';
import queryString from 'query-string'

class Course extends Component {
    render () {
        let parsed = queryString.parse(this.props.location.search)
        return (
            <div>
                <h1>{parsed.courseName}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;