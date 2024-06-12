from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

def get_user_profile():
    conn = sqlite3.connect('Profile.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE id = 1')
    user = c.fetchone()
    conn.close()
    return {
        'username': user[1],
        'email': user[2],
        'phone': user[3],
        'address': user[4],
        'profile_pic': user[5]
    }

@app.route('/profile')
def profile():
    user_profile = get_user_profile()
    return jsonify(user_profile)

if __name__ == '__main__':
    app.run(debug=True)
