import { create } from "zustand";

export const useBookingStore = create((set) => ({
    vehicle: null,

    bookingDetails: {
        name: "",
        emil: "",
        address: "",
        pickupLocation: "",
        startDate: "",
        returnDate: "",
        payment: {
            cardNumber: "",
            cardHolder: "",
            expiry: "",
            cvv: "",
        }
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
                payment: {
                    cardNumber: "",
                    cardHolder: "",
                    expiry: "",
                    cvv: ""
                }
            }
        })
}))