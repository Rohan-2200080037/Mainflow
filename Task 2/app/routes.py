from flask import Blueprint, render_template, request, redirect, url_for, session, g
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import query_db, add_user
import sqlite3

bp = Blueprint('auth', __name__)

@bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        user = query_db('SELECT * FROM users WHERE username = ?', (username,), one=True)
        
        if user and check_password_hash(user[2], password):
            session['user_id'] = user[0]
            return redirect(url_for('auth.profile'))
        else:
            return 'Invalid credentials'
    return render_template('login.html')

@bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = generate_password_hash(password, method='sha256')
        
        try:
            add_user(username, hashed_password)
        except sqlite3.IntegrityError:
            return 'Username already exists'
        return redirect(url_for('auth.login'))
    return render_template('signup.html')

@bp.route('/profile')
def profile():
    if 'user_id' not in session:
        return redirect(url_for('auth.login'))

    user_id = session['user_id']
    user = query_db('SELECT * FROM users WHERE id = ?', (user_id,), one=True)
    return render_template('profile.html', username=user[1])

@bp.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('auth.login'))

@bp.route('/recommendations')
def recommendations():
    if 'user_id' not in session:
        return redirect(url_for('auth.login'))
    
    user_id = session['user_id']
    # Fetch and display recommendations for the user
    return render_template('recommendations.html')

