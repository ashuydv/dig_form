// pages/api/forms/[id].tsx
import { ObjectId } from 'mongodb';
import clientPromise from '../../../utils/dbConnect';

export default async function handler(req: { query: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) {
    const { id } = req.query;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid form ID' });
    }

    const client = await clientPromise;
    const db = await client.db('drypto_app');
    const collection = await db.collection('forms');

    try {
        const data = await collection.findOne({ _id: new ObjectId(id) });
        if (!data) {
            return res.status(404).json({ error: 'Form not found' });
        }
        return res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
