const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route           GET api/profile/me
// @description     Get current user's Profile 
// @access          Private
router.get('/me',auth,async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate('user',['name','avatar']); //to add name and avatar attribute from user model, here we are setting user attribute of profile model with the authenticated user id

        if(!profile){
            return res.status(400).json({msg:'There is no profile for this user'});
        }

        res.json(profile);

    } catch (error) {
        console.error(error.message);
        res.error(500).send('Server Error');
    }
});
module.exports = router;