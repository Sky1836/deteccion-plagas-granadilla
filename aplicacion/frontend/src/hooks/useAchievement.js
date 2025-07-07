import { useState } from 'react';

export function useAchievement() {
    const [achievement, setAchievement] = useState(null);

    const unlockAchievement = async ({ userId, name, description, icon }) => {
        try {
            const res = await fetch('https://api.granashield.com/achievements/unlock', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, name, description, icon }),
            });
            const result = await res.json();

            if (result.unlocked) {
                setAchievement(result.achievement);
            }
        } catch (error) {
            console.error('Error desbloqueando logro:', error);
        }
    };

    return {
        achievement,
        unlockAchievement,
        clearAchievement: () => setAchievement(null),
    };
}
