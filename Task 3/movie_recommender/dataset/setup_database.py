import sqlite3

# Connect to the SQLite database
# This will create a new database file if it doesn't exist
conn = sqlite3.connect('movies.db')

# Create a cursor object to execute SQL commands
cursor = conn.cursor()

# Create a table for movies
cursor.execute('''
CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genres TEXT,
    rating REAL,
    image TEXT
)
''')

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database and table created successfully.")
