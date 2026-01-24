import { create } from "zustand"

export const useBookingStore = create((set) => ({
    vehicle: null,

    bookingDetails: {
        name: '',
        email: '',
        from: '',
        to: '',
        pick_up: '',
        drop_off: '',
        days: '',
        total: null,
    },

    setVehicle: (vehicle) => set({vehicle}),
    
    updateBookingDetails: (data) =>
        set((state) => ({
            bookingDetails: {
                ...state.bookingDetails,
                ...data,
            },
        })),

    resetBooking: () => 
        set({
            vehicle: null,
            bookingDetails: {
                name: '',
                email: '',
                from: '',
                to: '',
                pick_up: '',
                drop_off: '',
                days: '',
                total: null,
            }
        }),
}))