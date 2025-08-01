"use client"

import { useState, useEffect } from "react"

interface User {
  username: string
  role: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated on component mount
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    const username = localStorage.getItem("username")
    const userRole = localStorage.getItem("userRole")

    if (isAuthenticated === "true" && username && userRole) {
      setUser({ username, role: userRole })
    }
    setIsLoading(false)
  }, [])

  const login = (username: string, role: string) => {
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("username", username)
    localStorage.setItem("userRole", role)
    setUser({ username, role })
  }

  const logout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
    localStorage.removeItem("userRole")
    setUser(null)
  }

  const isAuthenticated = !!user

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  }
}
