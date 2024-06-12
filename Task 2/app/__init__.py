from flask import Flask
from app.models import init_db

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'

    with app.app_context():
        init_db()

    from . import routes
    app.register_blueprint(routes.bp)

    return app
