import * as httpMock from '../../mocks/http';
import { MenuApi } from '../../../src/api/menu';
import credential from '../../../src/utils/credential';
import { testJwt } from '../../mocks/jwt';

describe('Menu API', () => {
    const serviceUrl = 'http://some-url.com';
    const invalidAuthErrorMessage = 'Must not use an app token for authentication.';
    const noPropsMessage = 'Must provide props.';
    const noItemsMessage = 'Must provide an array of items.';
    const httpHeaders = credential({
        jwt: testJwt()
    }).authHeaders;
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new MenuApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get().then(() => {
                const fullUrl = api.getFullURL('menu');
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });


        it('should return an error if app token in auth', (done) => {
            const badApi = new MenuApi(serviceUrl, credential({
                appToken: 'some-token'
            }).authHeaders);

            badApi.get().catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#configure', () => {
        const props = {
            items: [],
            name: 'menieu'
        };

        it('should call http', () => {
            return api.configure(props).then(() => {
                const fullUrl = api.getFullURL('menu');
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, httpHeaders);
            });
        });

        it('should return an error if no items', (done) => {
            api.configure({
                name: 'menieu'
            }).catch((e) => {
                e.message.should.equal(noItemsMessage);
                done();
            });
        });

        it('should return an error if no props', (done) => {
            api.configure(undefined).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new MenuApi(serviceUrl, credential({
                appToken: 'some-token'
            }).authHeaders);

            badApi.configure(props).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#remove', () => {
        it('should call http', () => {
            return api.remove().then(() => {
                const fullUrl = api.getFullURL('menu');
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, httpHeaders);
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new MenuApi(serviceUrl, credential({
                appToken: 'some-token'
            }).authHeaders);

            badApi.remove().catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });
});
