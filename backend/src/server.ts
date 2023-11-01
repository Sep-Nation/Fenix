import express, { Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors())
app.use(router);

// Middleware de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof GenericError){
    return res.status(err.code).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: err?.message||'Internal server error.'
  })

})

export class GenericError extends Error {
  code: number;
  constructor(code: number, message: string){
    super(message)
    this.code = code
  }
}

export class AuthTokenError extends GenericError {
  constructor(){
    super(401, 'Error with authentication token')
  }
}

export class AuthInvalid extends GenericError {
  constructor(){
    super(403, 'Invalid credentials')
  }
}

app.listen(3333, () => console.log('Fenix despertou.'))