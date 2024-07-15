import express from "express";

const router = express()

router.get("/test", (req, res) => {
    console.log("post router working")
})

export default router;