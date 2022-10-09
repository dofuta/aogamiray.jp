import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { windowDimensionsAtom } from 'src/services/atom'

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined'

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null
        return {
            width,
            height,
        }
    }

    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
    const [windowDimensions, setWindowDimensions] = useRecoilState(windowDimensionsAtom)

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions())
            }
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [hasWindow])

    return windowDimensions
}
