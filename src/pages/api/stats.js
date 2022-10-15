import { getAuth } from '@clerk/nextjs/server';

export default function handler(req, res) {
  const { userId } = getAuth(req);

  if ( !userId ) {
    res.status(401).json({ status: 'Unauthorized' });
    return;
  }

  res.status(200).json({
    favorites: 16,
    tracking: 6,
    watched: 3
  });
}
