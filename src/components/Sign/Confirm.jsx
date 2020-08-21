import React, { Component } from 'react'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    back = e => {
        e.preventDefault();
        this.props.previous();
    }

    render() {

        const { values: { phone, firstName, lastName, city } } = this.props;

        return (
            <section className="">

                <u>
                    <li>Foto de perfil:</li>
                    <li>Teléfono: {phone}</li>
                    <li>Nombre: {firstName}</li>
                    <li>Apellido: {lastName}</li>
                    <li>Ciudad: {city}</li>
                </u>

                <button
                    onClick={this.back}
                >
                    Atrás
                </button>

                <button
                    onClick={this.continue}
                >
                    Confirmar y continuar
                </button>
            </section>
        )
    }
}

export default Confirm;