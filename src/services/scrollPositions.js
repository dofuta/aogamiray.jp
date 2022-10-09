import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { scrollPositionsAtom } from 'src/services/atom'

export default function useScrollPositions() {
    const hasWindow = typeof window !== 'undefined'

    function getScrollPositions() {
        const scrollX = hasWindow ? window.scrollX : null
        const scrollY = hasWindow ? window.scrollY : null
        return {
            scrollX,
            scrollY,
        }
    }

    // const [scrollPositions, setScrollPositions] = useState(getScrollPositions());
    const [scrollPositions, setScrollPositions] = useRecoilState(scrollPositionsAtom)

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setScrollPositions(getScrollPositions())
            }
            window.addEventListener('resize', handleResize)
            window.addEventListener('scroll', handleResize, true)
            return () => {
                window.removeEventListener('resize', handleResize)
                window.removeEventListener('scroll', handleResize)
            }
        }
    }, [hasWindow])

    return scrollPositions
}
