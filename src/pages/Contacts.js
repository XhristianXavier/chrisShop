import React, { useState } from 'react'

export const Contacts = () => {
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null)

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === "name") {
            setName(value);
        }
        if(id === "email") {
            setEmail(value);
        }
        if(id === "message") {
            setMessage(value)
        }
    }

    const handleSubmit = () => {
        let obj = {
            name: name,
            email: email,
            message: message
        }
        console.log('Enviando a los servicios', obj);
    }

    return (
        <>
            <main className="main">
                <div className="contacts">
                    <div className="contacts__wrapper">
                        <h1 className="contacts__title">
                            Ponerse en contacto
                        </h1>
                        <form className="form-contacts" action="#">
                            <div className="form-contacts__field">
                                <label className="form-contacts__label">Nombre*</label>
                                <input className="form-contacts__input" type="text" id="name" value={name} onChange = {(e) => handleInputChange(e)} placeholder="Nombre" />
                            </div>
                            <div className="form-contacts__field">
                                <label className="form-contacts__label">Email*</label>
                                <input className="form-contacts__input" type="text" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" />
                            </div>
                            <div className="form-contacts__field">
                                <label className="form-contacts__label">Mensaje*</label>
                                <textarea className="form-contacts__input form-contacts__input--textarea" id="message" value={message} onChange = {(e) => handleInputChange(e)} placeholder="Mensaje">
                                </textarea>
                            </div>
                            <div className="form-contacts__field">
                                <button onClick={()=>handleSubmit()} className="form-contacts__button">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

