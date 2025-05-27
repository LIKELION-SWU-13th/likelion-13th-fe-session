import { useState, useEffect } from "react";

export default function useOnlineStatus (){
    const [isOnline, setIsOnline] =useState(true); // 시작하면 온라인
    useEffect(()=> {
        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        };
    }, []);

    return isOnline;
}