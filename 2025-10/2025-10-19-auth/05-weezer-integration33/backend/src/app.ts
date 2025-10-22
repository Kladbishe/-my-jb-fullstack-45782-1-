// app.ts
import express, { json } from 'express';
import cors from 'cors';
import config from 'config';

import logger from './middlewares/error/logger';
import responder from './middlewares/error/responder';
import notFound from './middlewares/not-found';

import authRouter from './routers/auth';
import profileRouter from './routers/profile';
import feedRouter from './routers/feed';
import followsRouter from './routers/follows';
import commentsRouter from './routers/comments';
import enforceAuth from './middlewares/enforce-auth';
import sequelize from './db/sequelize';

const app = express();

// (тип расширения Request оставь в отдельном .d.ts файле, см. ниже)

const port = config.get<number>('app.port');
const appName = config.get<string>('app.name');
const secret = config.get<string>('app.secret');

console.log(`app secret is ${secret}`);

app.use(cors({
  origin: 'http://localhost:5173',             // твой фронт (если другой — укажи его)
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
}));

app.use(json());

// публичные роуты:
app.use('/auth', authRouter);

// защищённые роуты:
app.use('/profile', enforceAuth, profileRouter);
app.use('/feed', enforceAuth, feedRouter);
app.use('/follows', enforceAuth, followsRouter);
app.use('/comments', enforceAuth, commentsRouter);

// not found / error
app.use(notFound);
app.use(logger);
app.use(responder);

sequelize.sync({ force: process.argv[2] === 'sync' });

app.listen(port, () => console.log(`${appName} started on port ${port}`));
