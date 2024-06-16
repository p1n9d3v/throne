import { getDoc } from './firestore';

export const getWeaponById = async (id: string) => {
    const weapon = await getDoc(['weapons', id]);

    return weapon.data();
};
