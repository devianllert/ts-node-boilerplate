import {
  createLogger,
  LoggerOptions,
  transports,
  format,
} from 'winston';

const options: LoggerOptions = {
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: format.simple(),
    }),
    new transports.File({ filename: 'debug.log', level: 'debug' }),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

export default logger;
