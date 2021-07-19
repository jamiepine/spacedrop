import db from '~/database';

export async function createClient () {
  const client = await db.client.create({ data: {
    id: `${Math.floor(Math.random() * 999999)}`
  } });
  return {
    status: 'success',
    data: { client }
  }
}