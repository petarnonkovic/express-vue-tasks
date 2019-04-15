import request from 'supertest'
import app from '../../config/express.js'

describe('GET /', () => {

    it('Should return welcome message from api root', async () => {

        expect.assertions(4)
        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json')

        expect(response.status).toEqual(200)
        expect(response.body).toHaveProperty('message', 'Hello from API')
        expect(response.headers).toHaveProperty('access-control-allow-origin', '*')
        expect(response.headers).toHaveProperty('content-type', 'application/json; charset=utf-8')

    })

})
