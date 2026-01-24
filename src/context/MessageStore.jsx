import { create } from 'zustand';

export const useMessageStore = create((set) => ({
    message: {
        name: '',
        email: '',
        message: ''
    },

    setMessage: (data) => 
        set((state) => ({
            message: {
                ...state.message, ...data
            }
        })),
    
    resetMessage: () => 
        set({
            message: {
                name: '',
                email: '',
                message: ''
            },
        })

}))