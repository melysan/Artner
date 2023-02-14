import { prisma } from '../../server/db/client';

export default async function handle(req, res) {
    const { method } = req

    switch (method) {
        case 'POST':
            // get the title and content from the request body
            const { title, description, content } = req.body
            // use prisma to create a new post using that data
            const post = await prisma.post.create({
                data: {
                    title,
                    description,
                    content
                }
            })
            // send the post object back to the client
            res.status(201).json(post)
            break
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}