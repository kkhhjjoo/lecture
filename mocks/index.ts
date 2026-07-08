import { postsHandlers } from './handlers/posts';
import { setupServer } from 'msw/node';

export const server = setupServer(...postsHandlers);