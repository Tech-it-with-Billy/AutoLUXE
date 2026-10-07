import { create } from "zustand";

export const useVehicleStore = create((set) => ({
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
        images: []
    },

    updateVehicleData: (data) =>
        set((state) => ({
            vehicle: {
                ...state.vehicle, ...data
            }
        })),
    
    addImage: (image) =>
        set((state) => ({
            vehicle: {
                ...state.vehicle,
                images: [...state.vehicle.images, image]
            }
        })),
    
    removeImage: (index) =>
        set((state) => ({
            vehicle: {
                ...state.vehicle,
                images: state.vehicle.images.filter((_, i) => i !== index)
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
                images: []
            }
        }),
}))