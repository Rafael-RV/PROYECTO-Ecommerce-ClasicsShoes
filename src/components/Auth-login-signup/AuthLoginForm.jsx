import { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { loginService } from "../../services/user";
import { UserContext } from "../../contextApi/UserContext";
import { Link } from "react-router-dom";
import '../../CSS/login.css';

export const AuthLoginForm = () => {
    const { token, setToken } = useContext(UserContext);
    const history = useHistory();

    const [formData, setFormData] = useState({
        mail: "",
        password: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!formData.mail || !formData.password) {
            // Mostrar un mensaje al usuario indicando que ambos campos son obligatorios
            return;
        }

        try {
            const { mail, password } = formData;

            const userData = await loginService({
                mail,
                password,
            });

            console.log(userData);
            setToken(userData.detail.token);

            // Limpiar los campos después de una respuesta exitosa
            setFormData({
                mail: "",
                password: ""
            });

            // Redirigir a la página de perfil
            history.push('/miPerfil');

        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            // Mostrar mensaje de error al usuario
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <section className="login-section">
            <div className="background-image"></div>
            <div className="login-form">

                <form onSubmit={onSubmit}>
                    <h3>Login</h3>
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

                    <button type="submit">Enviar</button>
                    <p>¿No tienes una cuenta? <Link to="/signup">Regístrate</Link></p>
                </form>
            </div>
        </section>
    );
};
