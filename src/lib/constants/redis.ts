import Redis from 'ioredis';

export const redis = new Redis({
	host: import.meta.env.VITE_REDIS_HOST,
	port: import.meta.env.VITE_REDIS_PORT,
	password: import.meta.env.VITE_REDIS_KEY
});
