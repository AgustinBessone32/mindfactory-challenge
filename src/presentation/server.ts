import bodyParser from 'body-parser';
import express, { Router } from 'express';
import path from 'path';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;
  private readonly publicPath: string;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.publicPath = public_path;
    this.port = port;
    this.routes = routes;
  }

  start() {
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(bodyParser.json({ limit: '50mb' }));

    //Routes
    this.app.use(this.routes);

    //* SPA /^\/(?!api).*/  <== Únicamente si no empieza con la palabra api
    this.app.get('*', (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`,
      );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on PORT ${this.port}`);
    });
  }
}
