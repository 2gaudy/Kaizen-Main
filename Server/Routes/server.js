const router = require('express').Router()

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Show all classes
router.get('/classes', async (req, res, next) => {
    try {
        const classes = await prisma.classes.findMany({
            include: { category: true},
        })

        const categories = await prisma.category.findMany({
            include: { classes: true },
        })
        res.json({classes, categories})

    } catch (error){
        next(error)
    }
});

// Show a classes information
router.get('/classes/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const classesSelect = await prisma.classes.findUnique({
            where: {
                id: Number(id)
            },
            include: { category: true },
        })

        res.json(classesSelect)

    } catch (error) {
        next(error)
    }
});

// Add a Class
router.post('/classes/create', async (req, res, next) => {
    try {
        const newClass = await prisma.classes.create({
            data: req.body,
        })
        res.json(newClass)
    } catch (error){
        next(error)
    }
});

// Delete a Class
router.delete('/classes/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedClass = await prisma.classes.delete({
            where: {
                id: Number(id),
            },
            
        })

        res.json(deletedClass)

    } catch (error) {
        next(error)
    }


})

// Update a Class
router.patch('/classes/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const updatedClass = await prisma.classes.findUnique({
            where: {
                id: Number(id)
            },
            data: req.body,
            include: {
                category: true
            },
            
        })
        res.json(updatedClass)
        
    } catch (error) {
        
    }
})

module.exports = router