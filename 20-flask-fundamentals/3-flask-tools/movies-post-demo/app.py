from flask import Flask, request, render_template, redirect, flash, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = 'moviespost'
debug = DebugToolbarExtension(app)

MOVIES = {'Amadeus', 'Chicken Run', 'Dances With Wolves'}

@app.route('/')
def index():
    """Shows home page"""

    return render_template('index.html')

@app.route('/old-home-page')
def redirect_to_home():
    """Redirects to home"""

    flash('That page has moved. This is our new home page.')
    return redirect('/')

@app.route('/movies')
def show_all_movies():
    """Show a list of all movies in fake DB"""

    return render_template('movies.html', movies=MOVIES)


@app.route('/movies/new', methods=["POST"])
def add_movie():
    title = request.form['title']

    # Add to fake DB
    if title in MOVIES:
        flash("Movie already exists", 'error')
    else:
        MOVIES.add(title)
        flash('Created your movie', 'success')

    return redirect('/movies')


@app.route('/movies/json')
def get_movies_json():


    return jsonify(list(MOVIES))