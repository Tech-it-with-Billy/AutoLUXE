import { create } from "zustand";

export const useBookingStore = create((set) => ({
    vehicle: null,

    bookingDetails: {
        name: "",
        email: "",
        address: "",
        pickupLocation: "",
        startDate: "",
        returnDate: "",
        payment: ""
    },

    setVehicle: (vehicle) => set({vehicle}),

    updateBookingDetails: (data) => 
        set((state) => ({
            bookingDetails: {
                ...state.bookingDetails,
                ...data
            }
        })),
    
    resetBooking: () =>
        set({
            vehicle: null,
            bookingDetails: {
                name: "",
                email: "",
                address: "",
                pickupLocation: "",
                startDate: "",
                returnDate: "",
                payment: ""
            }
        })
}))