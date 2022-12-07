import express from 'express'

const router = express.Router();

// get all products
router.get("/", (req, res, next) => {
    res.status(200).json({
        "message": "Get all products"
    })
})

router.get("/:id", (req, res, next) => {
    res.status(200).json({
        "message": "Get all products"
    })
})

export default router