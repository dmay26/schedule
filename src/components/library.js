import React, { Component } from 'react';
import LibraryCourse from './librarycourse';

class Library extends Component {
    render () {
        return (
            <div className="library">
                <h1 className="library_title">Course Library</h1>
                <LibraryCourse/>
            </div>
        )
    }
}

export default Library;