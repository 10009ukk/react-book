import { atom } from "recoil";

const listPageReLoading = atom({
    key: 'listPageReLoading',
    default: 1,
})

const searchSlide = atom({
    key: 'searchSlide',
    default: '하루키'
})
export { listPageReLoading, searchSlide };