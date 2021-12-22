import React from 'react';

export default class Default extends React.Component {

    render() {
        return (
        <h1>{process.env.REACT_APP_ENV_APPNAME}</h1>
        )
    }
}