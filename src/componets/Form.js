import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod} className="form">
                <input className="form__input" type="text" name="city" placeholder="Город"/>
                <button className="form__button">Узнать погоду!</button>
            </form>
        );
    }
}

export default Form;