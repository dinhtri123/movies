import { useEffect, useState } from "react";

export default function useDebounce({initializeValue, delay}) {
    const [debounceValue, setDebounceValue] = useState(initializeValue);
    useEffect(()=>{
        const timer = setTimeout(()=>{},delay)
    },[])
} 