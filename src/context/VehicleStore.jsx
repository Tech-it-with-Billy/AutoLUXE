import { create } from "zustand";

export const useVehicleStore = create((set) => ({
    vehicle: {
        make: '',
        model: '',
        body_type: '',
        year: '',
        cost: '',
        engine: '',
        gearbox: '',
        seats: '',
        gas_type: '',
        images: null
    },

    updateVehicleData: (data) =>
        set((state) => ({
            vehicle: {
                ...state.vehicle, ...data
            }
        })),
    
    resetVehicle: () =>
        set({
            vehicle: {
                make: '',
                model: '',
                body_type: '',
                year: '',
                cost: '',
                engine: '',
                transmission: '',
                seats: '',
                gas_type: '',
                images: null
            }
        }),
}))