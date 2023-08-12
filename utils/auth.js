const withAuth = (req, res, next) => {

  //if you're not logged in, redirect to welcome page
    if (!req.session.loggedIn) {
      res.redirect('/')
    } else {
      next()
    }
  };
  
  module.exports = withAuth;

  