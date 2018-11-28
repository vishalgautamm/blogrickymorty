import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                Details from character {this.props.match.params.id}
            </div>
        );
    }
}

export default Detail;