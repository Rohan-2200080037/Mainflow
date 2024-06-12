import sqlite3
import csv

# Connect to the SQLite database
conn = sqlite3.connect('movies.db')
cursor = conn.cursor()

# Open the CSV file and insert data into the movies table
with open('dataset\movies.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        cursor.execute('''
        INSERT INTO movies (title, genres, rating, image)
        VALUES (:title, :genres, :rating, :image)
        ''', row)

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database populated successfully.")
