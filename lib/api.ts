// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"

// export interface RegisterData {
//   name: string
//   email: string
//   phone: string
//   password: string
// }

// export interface LoginData {
//   email: string
//   password: string
// }

// export interface User {
//   id: string
//   name: string
//   email: string
//   phone: string
// }

// export const api = {
//   async register(data: RegisterData) {
//     const res = await fetch(`${API_URL}/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       credentials: "include",
//     })

//     if (!res.ok) {
//       throw new Error("Registration failed")
//     }

//     return res.json()
//   },

//   async login(data: LoginData) {
//     const res = await fetch(`${API_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       credentials: "include",
//     })

//     if (!res.ok) {
//       throw new Error("Login failed")
//     }

//     return res.json()
//   },

//   async logout() {
//     const res = await fetch(`${API_URL}/logout`, {
//       method: "POST",
//       credentials: "include",
//     })

//     if (!res.ok) {
//       throw new Error("Logout failed")
//     }

//     return res.json()
//   },

//   async getUser() {
//     const res = await fetch(`${API_URL}/user`, {
//       credentials: "include",
//     })

//     if (!res.ok) {
//       throw new Error("Failed to get user")
//     }

//     return res.json()
//   },
// }

