import axios from 'axios'

// const MOCK_URL = 'http://127.0.0.1:4523/m1/2105711-0-default'

const PRODUCTINO_URL = 'http://jisutqybmf.market.alicloudapi.com'

const http = axios.create({
    baseURL: PRODUCTINO_URL,
    timeout: 1000,
    headers: {
        Authorization: 'APPCODE xxx'
    }
})

export {
    http
}