import {requestDefault} from "./request";

export function getMultiData() {
    return requestDefault({
        url: '/home/multidata',
        method: 'get'
    })
}