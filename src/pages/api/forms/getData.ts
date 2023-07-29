import clientPromise from '@/utils/dbConnect';

export default async function handler(req: { query: { formId: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string }): void; new(): any } } }) {
    const { formId } = req.query;
    const client = await clientPromise;
    const db = await client.db("drypto_app");
    const collection = await db.collection("forms");

    try {
        // If formId is provided, fetch the data for that specific form
        if (formId) {
            const data = await collection.findOne({ _id: formId }); // Assuming the formId is the _id of the document in the collection
            if (!data) {
                return res.status(404).json({ error: 'Form not found' });
            }
            return res.status(200).json(data);
        } else {
            // If formId is not provided, fetch all data
            const data = await collection.find({}).toArray();
            return res.status(200).json(data);
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
