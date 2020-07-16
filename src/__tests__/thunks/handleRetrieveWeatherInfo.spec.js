import handleRetrieveWeatherInfo from '../../thunks/handleRetrieveWeatherInfo';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockKey: { mockValue } }),
  })
);

describe('The Thunk handleRetrieveWeatherInfo', () => {
    const unit = "Imperial";
    const location = "Munich,de";
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
        fetch.mockClear();
    });

    it('should call API successfully', () => {
        handleRetrieveWeatherInfo(unit, location) (dispatch);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("should return null when exception", async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        handleRetrieveWeatherInfo(unit, location) (dispatch);     
        expect(fetch).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=Imperial');
      });

})
