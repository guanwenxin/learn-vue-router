import axios from 'axios'

// const MOCK_URL = 'http://127.0.0.1:4523/m1/2105711-0-default'

// const PRODUCTINO_URL = 'http://jisutqybmf.market.alicloudapi.com'
const TEST_URL = 'http://127.0.0.1:3000/api'

const http = axios.create({
    baseURL: TEST_URL,
    timeout: 1000,
    // headers: {
    //     Authorization: 'APPCODE 51666496883a48b2b4e371dcb77903c0'
    // }
})

export {
    http
}