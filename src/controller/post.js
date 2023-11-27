const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPosts = async (req, res) => {
    const posts = await prisma.post.findMany()
    res.status(200).json({
        data: posts,
        message: "Success get all posts"
    })
}

module.exports = {
    getAllPosts
}