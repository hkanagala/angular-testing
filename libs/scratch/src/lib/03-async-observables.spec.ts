import { Observable, of, tap } from 'rxjs';

describe('basic structure for testing a method or function that returns an observable', () => {
  it('testing the sendToServer', (done) => {
    // We can't say we are done until the sendToServer returns a value.
    // if we take the 'done' callback on the function for the "it", it won't let the test complete until we call that function.
    // There is a configurable timeout.. I can't remember what the default is, but in a unit test, it should be plenty.
    sendToServer({ message: 'Lunch Time', priority: 'HIGH' })
      .pipe(
        tap((response) => expect(response).toEqual('Done!')),
        tap(() => done())
      )
      .subscribe();
  });
});

function sendToServer(log: {
  message: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}): Observable<string> {
  // do the thing...
  return of('xDone!');
}
