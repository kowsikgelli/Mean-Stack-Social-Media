const router = require('express').Router();
const passport = require('passport');
const {
    createPost,
    updatePost,
    deletePost,
    likeOrDislike,
    getPost,
    getFeed
} = require("../controllers/postController")

//create a post
router.route("/createpost").post(passport.authenticate('jwt',{session:false}),createPost)
// update a post
router.route("/updatepost/:id").put(passport.authenticate('jwt',{session:false}),updatePost)
//delete a post
router.route("/deletepost/:id").delete(passport.authenticate('jwt',{session:false}),deletePost)
//like or dislike a post
router.route("/likeordislike/:id").put(passport.authenticate('jwt',{session:false}),likeOrDislike)
//get a post
router.route("/getpost/:id").get(passport.authenticate('jwt',{session:false}),getPost)
//get posts of friends
router.route("/getuserfeed").get(passport.authenticate('jwt',{session:false}),getFeed)

module.exports = router;