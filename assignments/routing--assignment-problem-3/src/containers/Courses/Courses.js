import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";

import './Courses.css';
import Course from "../Course/Course";

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        loadedCourse: null
    };

    render () {
        let courses =  this.props.location.search === '' ? this.state.courses
            .map(course =>
                <Link
                    key={course.id}
                    to={{
                        pathname: '/courses/' + course.id,
                        search: `title=${course.title}`
                    }}>
                    <article
                    className="Course">
                        {course.title}
                    </article>
                </Link>
            ) : null;
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path={'/courses/:id'} render={(props) => <Course {...props} />}/>
            </div>
        );
    }
}

export default Courses;