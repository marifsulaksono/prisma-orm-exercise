const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json({
            data: users,
            message: "Success get all users"
        })
    } catch (error) {
        res.status(500).json({
            message: "Get users data error"
        })
    }
}

const insertNewUser = async (req, res) => {
    try {
        const body = { ...req.body }
        const result = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email
            }
        })

        res.status(201).json({
            message: "Success create new user"
        })
    } catch (error) {
        res.status(500).json({
            message: "Create user error"
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const body = { ...req.body }
        const id = parseInt(req.params.id)
        const result = await prisma.user.update({
            where: { id },
            data: {
                name: body.name,
                email: body.email
            },
        })

        res.status(200).json({
            message: `Success update user ${id}`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Update user error"
        })
    }
}

module.exports = {
    getAllUsers,
    insertNewUser,
    updateUser
}