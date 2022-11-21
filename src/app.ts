import 'dotenv/config'
import * as express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

export default class App {
  private app: express.Application
  private port: string | number
  io: Server
  private server: any

  constructor(port?: string | number) {
    this.app = express()
    this.port = process.env.PORT || port || 4000
    this.server = createServer(this.app)
    this.io = new Server(this.server, { cors: { origin: '*' } })
    this.listenToPort(this.port)
  }

  private listenToPort(port: string | number): void {
    this.server.listen(port, () => {
      console.info(`Server is running on http://localhost:${port}`)
    })
  }
}
