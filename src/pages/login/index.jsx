import React, { useEffect, useState } from 'react'
import { useAuth } from '../../stores/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const _onResetForm = () => {
    setIdentifier('')
    setPassword('')
  }

  const _onLogin = async () => {
    _onResetForm()
    try {
      await login({ identifier, password })
      navigate('/')
    } catch (error) {
      console.error('Đăng nhập không thành công:', error)
    }
  }

  return (
    <div className='formLogin'>
  <div className="flex min-h-full flex-col justify-center py-6 lg:px-8">
    <form onSubmit={(e) => {
      e.preventDefault();
      _onLogin();
    }} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="space-y-6">
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div className="mt-2">
            <input id="identifier" required name="identifier" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={identifier ? identifier : ''}
              onChange={(e) => setIdentifier(e.target.value)}
              autoComplete="username"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </div>
    </form>
    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register</a>
    </p>
  </div>
</div>

  )
}
