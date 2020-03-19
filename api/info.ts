import { NowRequest, NowResponse } from '@now/node'
import * as fs from 'fs'

export default async (req: NowRequest, res: NowResponse) => {
  res.json({ ip: 0, d: fs.readdirSync('/') });
}
