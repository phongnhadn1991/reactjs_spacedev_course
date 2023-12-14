import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../../../services/authent_service";
import { setToken, setUser } from "../../../untils/token";
import { userService } from "../../../services/user_service";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user'))
  })

  const login = async (data) => {
    try {
      const res = await authService.login({
        username: "yimiyej346@rdluxe.com",
        password: "yimiyej346"
      })
      if (res.data) {
        setToken(res.data)
        const userData = await userService.getProfile()
        _setUser(userData.data)
        setUser(userData.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>
}
