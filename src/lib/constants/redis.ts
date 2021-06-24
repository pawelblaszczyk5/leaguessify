import Redis from 'ioredis';

const authKey = import.meta.env.VITE_REDIS_KEY as string;

export const redis = new Redis({
	host: 'redis-14281.c247.eu-west-1-1.ec2.cloud.redislabs.com',
	port: 14281,
	password: authKey
});
