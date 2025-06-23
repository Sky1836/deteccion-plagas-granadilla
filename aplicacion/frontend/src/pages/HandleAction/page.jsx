import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HandleAction() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const mode = params.get('mode');
        const oobCode = params.get('oobCode');

        if (!mode || !oobCode) {
            navigate('/login');
            return;
        }

        if (mode === 'resetPassword') {
            navigate(`/reset-password?oobCode=${encodeURIComponent(oobCode)}`);
        } else if (mode === 'verifyEmail') {
            navigate(`/verify-email?oobCode=${encodeURIComponent(oobCode)}`);
        } else {
            navigate('/login');
        }
    }, [location, navigate]);

    return <p>Redireccionando...</p>;
}
