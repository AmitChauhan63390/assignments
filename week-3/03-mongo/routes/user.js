const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({msg:"New user Created"});
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({})
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    });
    res.json({msg:"Purchase Complete"});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username
    })
    res.json({
        msg:user.purchasedCourses
    })
});

module.exports = router