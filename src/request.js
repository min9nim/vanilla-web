const HOST = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev'

export default async function request(keyword) {
    const result = await fetch(HOST + '/languages?keyword=' + keyword)
    if (result.ok) {
        return result.json()
    }
    throw Error('request failed')
}
