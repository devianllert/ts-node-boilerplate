import path from 'path';
import {
  createLogger,
  LoggerOptions,
  transports,
  format,
} from 'winston';

const options: LoggerOptions = {
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  transports: [
    new transports.File({ filename: path.join(__dirname, '..', '..', 'log/debug.log'), level: 'debug' }),
    new transports.File({ filename: path.join(__dirname, '..', '..', 'log/error.log'), level: 'error' }),
    new transports.File({ filename: path.join(__dirname, '..', '..', 'log/info.log'), level: 'info' }),
  ],
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple(),
      ),
    }),
  );

  logger.debug('Logging initialized at debug level');
}

export default logger;
