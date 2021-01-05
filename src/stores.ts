import { localStore } from './local-store';

const defaultEquipment = {
    active: [1, 2, 3, 4],
    available: [1, 2, 3, 4]
};

export const equipment = localStore('equipment', defaultEquipment);
