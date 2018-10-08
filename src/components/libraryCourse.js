import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course_title">Problem Solving</label>
                {/* Icon component */}
                {/* arrow function */}
                {/* action button component */}
                <div className="library-course_descriptions">
                    <label>Course Descripton</label>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue risus, luctus in tincidunt ut, sagittis quis tellus. Vestibulum sit amet scelerisque nulla, eget iaculis ex. Quisque posuere, turpis non facilisis rhoncus, mi odio tempor nisi, non scelerisque leo neque vitae ligula. Suspendisse potenti. Nam lobortis euismod risus quis suscipit.</p>
                </div>
            
            </div>
        )
    }
}

export default LibraryCourse;