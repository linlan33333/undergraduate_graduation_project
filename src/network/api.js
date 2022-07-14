import http from './http.js'

export function testJson() {
    return http.get('/testJson')
}

export function processV() {
    return http.get('/processV')
}

export function checkPV() {
    return http.get('/checkPV')
}

export function download() {
    return http.get('/download')
}

export function getPeopleNum() {
    return http.get('/getPeopleNum')
}