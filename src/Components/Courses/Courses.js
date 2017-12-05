import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Course from '../Course/Course'

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickedHandler = (id) => {
      let course = this.state.courses.find((item) => {
        return item.id === id
      })
      this.props.history.push('/courses/' + id + "?courseName=" + course.title)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                        return (<article onClick={(id) => this.courseClickedHandler(course.id)} className="Course" coursename={course.title} courseid={course.id}
                          key={course.id}>{course.title}</article>);
                        })
                    }
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={Course} />
            </div>
        );
    }
}

export default Courses;