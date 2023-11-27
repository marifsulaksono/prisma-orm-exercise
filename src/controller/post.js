const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: { author: true }
        })
        res.status(200).json({
            data: posts,
            message: "Success get all posts"
        })
    } catch (error) {
        res.status(500).json({
            message: "Get all users error"
        })
    }
}

const insertNewPost = async (req, res) => {
    try {
        const body = { ...req.body }
        const results = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: body.authorId
            }
        })

        res.status(201).json({
            message: "Success create new post"
        })
    } catch (error) {
        res.status(500).json({
            message: "Create new post error"
        })
    }
}

module.exports = {
    getAllPosts,
    insertNewPost
}