import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../../../services/authent_service";
import { clearToken, clearUser, setToken, setUser } from "../../../untils/token";
import { userService } from "../../../services/user_service";
import { message } from "antd";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user'))
  })

  const login = async (data) => {
    try {
      const res = await authService.login(data)
      if (res.data) {
        message.success(`Login Success !`)
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
    clearUser()
    clearToken()
    _setUser(null)
    message.success(`Logout Success !`)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>
}
