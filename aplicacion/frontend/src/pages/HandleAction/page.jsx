import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function HandleAction() {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

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

    return <p>{t('auth.redirecting')}</p>;
}
