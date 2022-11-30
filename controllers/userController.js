const User = require('./../models/userModel');
const APIFeatures = require('../databaseManager/loanDbContext.JS');


exports.getLandingPAge = async (req, res) => {
  res.status(200).render('index', {title: `index`});
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('register', {
    title: `Create New User`
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};


exports.getusers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const users = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};