import express from 'express'

const router = express.Router();

router.get("/sign-in", (req, res, next) => {
    res.status(200).json({
        "message": "Hello World"
    })
})

export default router