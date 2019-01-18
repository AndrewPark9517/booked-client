import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        return (
            <div className="Input">
                <input className="form-input"
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    ref={input => (this.input = input)}
                />
                {error} 
            </div>
        );
    }
}
