import dbConnect from '@/lib/dbConnect';
import Notice from '@/models/Notice';

export const dynamic = 'force-dynamic';

export async function GET() {
  await dbConnect();

  try {
    // Sort by createdAt descending (newest first)
    const notices = await Notice.find({}).sort({ createdAt: -1 });
    return Response.json(notices);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch notices' }, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { title, link } = body;

    if (!title || !link) {
      return Response.json({ error: 'Title and link are required' }, { status: 400 });
    }

    const notice = await Notice.create({ title, link });
    return Response.json({ success: true, data: notice }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
