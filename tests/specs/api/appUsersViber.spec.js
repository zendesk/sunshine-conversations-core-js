import * as httpMock from '../../mocks/http';
import { AppUsersViberApi } from '../../../src/api/appUsersViber';
import credential from '../../../src/utils/credential';
import { testJwt } from '../../mocks/jwt';

describe('AppUsersViber API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = credential({
        jwt: testJwt()
    }).authHeaders;
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppUsersViberApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#getQRCode', () => {
        it('should call http', () => {
            return api.getQRCode(userId).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'integrations', 'viber', 'qrcode');
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });
    });
});
