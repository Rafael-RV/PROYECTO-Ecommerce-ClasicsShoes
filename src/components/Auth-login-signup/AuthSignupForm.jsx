import {  useState } from "react";
import { signupService } from "../../services/user";
import '../../CSS/login.css';


export const AuthSignupForm = () => {
  

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        mail: "",
        password: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const userData = await signupService({
                nombre: formData.nombre,
                apellido: formData.apellido,
                direccion: formData.direccion,
                mail: formData.mail,
                password: formData.password,
            });
            console.log(userData);
            setToken(userData.detail.token);
            

            // Limpiar los campos después de una respuesta exitosa
            setFormData({
                nombre: "",
                apellido: "",
                direccion: "",
                mail: "",
                password: ""
            });
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            // Manejar el error aquí si es necesario
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <section>
            <form onSubmit={onSubmit}>
                <h3>Registro</h3>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        id="apellido"
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        id="direccion"
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="mail">Email</label>
                    <input
                        id="mail"
                        type="text"
                        name="mail"
                        value={formData.mail}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};
