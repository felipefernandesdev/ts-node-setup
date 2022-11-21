import 'dotenv/config'
import * as express from 'express'
import Person from '@/person'

const app = express()
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(new Person().myHelloWorld())
})
app.listen(3000, () => console.log('listening on port 3000!!!'))
