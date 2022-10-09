const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
const dashboredRoutes = require('./dashbored-routes')

router.use('/', homeRoutes);
router.use('/dashbored', dashboredRoutes)
router.use('/api', apiRoutes);


module.exports = router;