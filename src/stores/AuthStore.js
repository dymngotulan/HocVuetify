import { defineStore } from 'pinia'
export const useAuthStore = defineStore('Auth', {
    state: () => ({
        auth: '',
    }),   
    actions: {
        setAccessToken(data) {
            this.auth=data
        },
        getAccessToken() {
            return this.auth
        },
        isLogedIn(){
            return this.auth!=null && this.auth!=""
        }
    },
})
export default useAuthStore