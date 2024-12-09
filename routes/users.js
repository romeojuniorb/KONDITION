import express from 'express';
import passport from 'passport';
import catchAsync from '../utils/catchAsync.js';
import User from '../models/User.js';

const router = express.Router();

// Render Registration Page
router.get('/register', (req, res) => {
    res.render('users/register');
});

// Handle Registration
router.post('/register', catchAsync(async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to KONDITION!');
            res.redirect('/posts'); 
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}));

// Render Login Page
router.get('/login', (req, res) => {
    res.render('users/login');
});

// Handle Login
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/posts';
    delete req.session.returnTo;
    res.redirect('/dashboard');
});

// Handle Logout
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash('success', 'Goodbye!');
        res.redirect('/posts'); 
    });
});

export default router;
