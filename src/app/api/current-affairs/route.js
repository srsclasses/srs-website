import dbConnect from '@/lib/dbConnect';
import CurrentAffair from '@/models/CurrentAffair';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  try {
    if (date) {
      // Fetch specific date
      const data = await CurrentAffair.findOne({ date });
      if (!data) {
         // Return 200 with null or similar if not found, or let frontend handle it.
         // Matching existing JSON behavior: frontend expects an entry or logic handles undefined.
         // We'll return null to be clear.
         return Response.json(null);
      }
      return Response.json(data);
    } else {
      // Fetch all (or limited recent ones) if no date provided?
      // For now, let's just return all sorted by date desc
      const data = await CurrentAffair.find({}).sort({ date: -1 });
      return Response.json(data);
    }
  } catch (error) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request) {
  // Simple endpoint to add new current affair (optional usage)
  await dbConnect();
  try {
    const body = await request.json();
    const { date, link } = body;
    
    if (!date || !link) {
      return Response.json({ error: 'Date and link are required' }, { status: 400 });
    }

    // Upsert: update if exists, insert if new
    const result = await CurrentAffair.findOneAndUpdate(
      { date },
      { link },
      { new: true, upsert: true, runValidators: true }
    );

    return Response.json({ success: true, data: result });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
