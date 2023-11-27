import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginService } from "../../services/user";
import { UserContext } from "../../contextApi/UserContext";
import { Profile } from "../ProfileComp/Profile";
import { Link } from "react-router-dom";
import '../../CSS/login.css';

export const AuthLoginForm = () => {
    const { token, setToken, user, setUser, setIsAuth, logout } = useContext(UserContext);
    const navigate = useNavigate();

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

            setToken(userData.detail.token);

            // Puedes guardar más información del usuario si es necesario
            setUser(userData.detail.user);

            setIsAuth(true); // Establece la autenticación en true

            // Limpiar los campos después de una respuesta exitosa
            setFormData({
                mail: "",
                password: ""
            });

            // Redirigir a la página de perfil
            navigate('/profile');

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

                {token && (
                    <div>
                        {/* Muestra el perfil del usuario si hay una sesión activa */}
                        <Profile user={user} />
                        
                        {/* Botón de cierre de sesión */}
                        <button onClick={logout}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </section>
    );
};
