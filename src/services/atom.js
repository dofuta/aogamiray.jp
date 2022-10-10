import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// const currentSelectAtom = atom({
//     key: 'currentSelect',
//     default: '',
//     effects_UNSTABLE: [persistAtom],
// })

const currentSelectAtom = atom({
    key: 'currentSelect',
    default: '',
    effects_UNSTABLE: [],
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

export { currentSelectAtom, windowDimensionsAtom, scrollPositionsAtom }
