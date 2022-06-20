import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Contact.css';
import './Popup.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            message: "",
            open: false,

            errors:{
                name: false,
                email: false
            }
        }
    }

    closeModal = () => {
        this.setState({ errors: {
            open: false
        }})
    }
    changeValues = e => {
        const { target: {name, value} } = e
        
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {name, email, phone, message} = this.state;

        this.setState({
            errors: {
                name: name.trim() === '',
                email: email.trim() ==='',
            }
        })
    }

    render() {
        return (
            <div className = 'Contact'>
                <h1 className = 'Title'>Contacto</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>
                            <h2>Nombre</h2>
                            <input 
                                name="name"
                                onChange={this.changeValues}
                                className={
                                    this.state.errors.name ? 'error' : ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.name 
                            &&
                            <div className='errorMessage'>Campo requerido</div>
                        }
                    </div>
                    <div>
                        <label>
                            <h2>Teléfono</h2>
                            <input name="phone" onChange={this.changeValues}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <h2>Email</h2>
                            <input 
                                name="email" 
                                onChange={this.changeValues}
                                className={
                                    this.state.errors.email ? 'error' : ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.email 
                            &&
                            <div className='errorMessage'>Campo requerido</div>
                        }
                    </div>

                    <div>
                        <label>
                            <h2>Mensaje</h2>
                            <input name="message" onChange={this.changeValues}/>
                        </label>
                    </div>

                <Popup
                    trigger={<input type= "submit" name="Enviar"/>} 
                    modal 
                    nested
                >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header">Datos</div>
                        <div className="content">
                            <p><strong>Nombre:</strong>{this.state.name}</p>
                            {this.state.phone && <p><strong>Teléfono:</strong>{this.state.phone}</p>}
                            <p><strong>Email:</strong>{this.state.email}</p>
                            {this.state.message && <p><strong>Mensaje:</strong>{this.state.message}</p>}
                        </div>
                        <button className="actions" onClick={close}>Aceptar</button>
                    </div>
                )}
            </Popup>

                </form>
            </div>
        );
    }
}

export default Contact;