import { NowRequest, NowResponse } from '@now/node'

import mysql from 'mysql'

mysql.connect({
  host: 'localhost',
  username: 'root',
  password: '123456',
  database: 'mqtt',
  pool: 8,
})

export default async (req: NowRequest, res: NowResponse) => {
  const { clientid, password, payload, topic } = req.query;

  // 查询
  let client = mysql.query('select password from clients where clientid = ?', clientid);
  const authResult = client ? client.password === clientid : false;

  res.json({
    result: authResult,
  });
}
