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

        const { values: { userName, password, phone, piece, type, gender, description, city, brand, size, color, condition } } = this.props;
        const user = {
            userName: userName,
            email: '',
            phone: phone,
            password: password,
            phone: phone,
            urlPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'
        }

        const clothe = {
            city: city,
            type: type,
            gender: gender,
            description: description,
            brand: brand,
            size: size,
            color: color,
            condition: condition,
            date: '',
            urlPhoto: ''
        }

        console.log(user)
        console.log(clothe)
        return (
            <section className="">

                <u>
                    <li>Nombre: {userName}</li>
                    <li>Teléfono: {phone}</li>
                    <li>Ciudad: {city}</li>
                    <li>Description: {description}</li>
                    <li>Prenda: {piece}</li>
                    <li>Talla: {size}</li>
                    <li>Marca: {brand}</li>
                    <li>Color: {color}</li>
                    <li>Estado: {condition}</li>
                    <li>Género: {gender}</li>
                    <li>Categoría: {type}</li>
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