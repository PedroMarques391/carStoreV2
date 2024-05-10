"use client"
import { auth } from "@/data/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, ReactNode, createContext, use } from "react";

type AuthContextDataType = {
    signed: boolean
    loadingAuth: boolean
    handleInfoUser: ({uid, email, fullName}: IUserProps) => void
    user: IUserProps | null
    
}

interface IAuthProviderProps {
    children: ReactNode
}

interface IUserProps {
    uid: string
    fullName: string | null
    email: string | null
}

export const AuthContext = createContext({} as AuthContextDataType)

function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUserProps | null>(null)
    const [loadingAuth, setLoadingAuth] = useState<boolean>(true)

    useEffect(() => {
        const onSub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    fullName: user?.displayName,
                    email: user?.email
                })
                setLoadingAuth(false)
            } else {
                setUser(null)
                setLoadingAuth(false)
            }
        })

        return () => onSub()

    }, [])

    function handleInfoUser({ uid, email, fullName }: IUserProps) {
        setUser({
            uid,
            email,
            fullName
        })
    }


    return (
        <AuthContext.Provider value={{ 
            signed: !!user, 
            loadingAuth, 
            handleInfoUser,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider