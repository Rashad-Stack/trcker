import { useEffect, useState } from 'react'

export default function useAuthCheck() {
    const [ authChecked, setAuthChecked ] = useState(false)
    
    useEffect(() => {
        
        setAuthChecked(true)
    }, [])
    
    return authChecked
}
