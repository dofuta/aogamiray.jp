import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const darkModeAtom = atom({
    key: 'darkMode',
    default: null,
    effects_UNSTABLE: [persistAtom],
})

const windowDimensionsAtom = atom({
    key: 'windowDimensions',
    default: {
        width: typeof window !== 'undefined' ? window.innerWidth : null,
        height: typeof window !== 'undefined' ? window.innerHeight : null,
    },
    effects_UNSTABLE: [],
})

const scrollPositionsAtom = atom({
    key: 'scrollPositions',
    default: {
        scrollX: typeof window !== 'undefined' ? window.scrollX : null,
        scrollY: typeof window !== 'undefined' ? window.scrollY : null,
    },
    effects_UNSTABLE: [],
})

export { darkModeAtom, windowDimensionsAtom, scrollPositionsAtom }
