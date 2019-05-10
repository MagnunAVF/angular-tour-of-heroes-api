import { Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import * as serverless from 'aws-serverless-express';
import { HttpExceptionFilter } from './http-exception.filter';

const express = require('express')();
let cachedServer: Server;

function bootstrapServer(): Promise<Server> {
  return NestFactory.create(AppModule, express)
    .then(app => app.enableCors())
    .then(app => app.useGlobalFilters(new HttpExceptionFilter()))
    .then(app => app.init())
    .then(() => serverless.createServer(express));
}

export const handler =  (event: any, context: Context) => {
  console.log(JSON.stringify(event));
  if (!cachedServer) {
    bootstrapServer().then(server => {
      cachedServer = server;
      return serverless.proxy(server, event, context);
    });
  } else {
    return serverless.proxy(cachedServer, event, context);
  }
};
