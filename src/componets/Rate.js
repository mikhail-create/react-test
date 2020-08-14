import React from 'react';

class Rate extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && // Условие
                    <div>
                        <p>Местоположение: {this.props.city}, {this.props.country}</p>
                        <p>Температруа: {this.props.temp}°C</p>
                        <p>Восход солнца: {this.props.sunrise}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
                <p>{ this.props.error }</p>
            </div>
        );
    }
}

export default Rate;