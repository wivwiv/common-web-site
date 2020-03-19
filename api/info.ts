import { NowRequest, NowResponse } from '@now/node'
import axios from 'axios';
import * as fs from 'fs'

export default async (req: NowRequest, res: NowResponse) => {
  const resp = await axios.get('http://ip-api.com/json')
  res.json({ ip: resp.data, d: fs.readdirSync('/') });
}
