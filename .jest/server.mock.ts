import 'whatwg-fetch';
import { server } from '../utils/mockServer/server';

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});