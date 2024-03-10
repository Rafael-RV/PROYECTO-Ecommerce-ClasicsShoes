import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contextApi/UserContext';
import '../ProfileComp/profile.css'


export const Profile = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isUserLoaded();
  }, []);

  const isUserLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="centered-container">
      <div className="profile-content">
        <section >
          <div>
            <h2>Tus Datos</h2>
          </div>
        </section>
        {!loading && (
          <section>
            <div >
              {userFields.map((field) => (
                <ProfileField key={field.label} label={field.label} value={user?.[field.key]} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="py-2 d-flex flex-row border-top border-bottom">
    <p className="mb-0">{label}</p>
    <p className="mb-0 ms-3 user-profile-data">
      <i>{value ?? '..loading'}</i>
    </p>
  </div>
);

const userFields = [
  { label: 'Nombre:', key: 'nombre' },
  { label: 'Apellido:', key: 'apellido' },
  { label: 'Dirección:', key: 'direccion' },
  { label: 'Email:', key: 'mail' },
];
