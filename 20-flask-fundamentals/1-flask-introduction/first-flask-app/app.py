from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def index():
    """Home page for application"""

    html = """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>Welcome to my simple app!</p>
            <a href='/hello'>Go to Hello page</a>
        </body>
    </html>
"""
    return html


@app.route("/hello")
def say_hello():
    """Route that greets the user"""

    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the hello page</p>
        </body>
    </html>
"""
    return html


@app.route("/goodbye")
def say_bye():
    """Route that bids the user farewell"""

    return "Goodbye!"


@app.route("/search")
def search():
    """Handle GET requests like /search?term=fun&sort=new"""

    term = request.args["term"]
    sort = request.args["sort"]
    return f"<h1>Search Results For: {term}</h1> <p>Sorting by: {sort}</p>"


# @app.route("/post", methods=["POST"])
# def post_demo():
#     return "You made a post request"


# @app.route("/post", methods=["GET"])
# def get_demo():
#     return "You made a get request"


@app.route("/add-comment")
def add_comment_form():
    """Show form for adding a comment"""

    return """
        <h1>Add Comment:</h1>
        <form method="POST">
            <input type='text' placeholder='comment' name='comment'/>
            <input type='text' placeholder='username' name='username'/>
            <button>Submit</button>
        </form>
    """


@app.route("/add-comment", methods=["POST"])
def save_comment():
    """Handle adding comment"""

    comment = request.form["comment"]
    username = request.form["username"]

    return f"""
        <h1>Saved your comment!</h1>
        <ul>
            <li>Username: {username}</li>
            <li>Comment: {comment}</li>
        </ul>
    """


@app.route("/r/<subreddit>")
def show_subreddit(subreddit):
    """Fetches and serves Subreddit data"""
    
    return f"""
        <h1>Browsing the {subreddit} Subreddit</h1>
    """


@app.route("/r/<subreddit>/comments/<int:post_id>")
def show_comemnts(subreddit, post_id):
    """Shows comments for specific post within a subreddit"""

    return (
        f"<h1>View comemnts for post with id: {post_id} from the {subreddit} Subreddit"
    )


POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo!",
    3: "Double rainbow all the way",
    4: "YOLO OMG (kill me)",
}


@app.route("/posts/<int:id>")
def find_post(id):
    """Finds post from database and serves it to user"""

    post = POSTS.get(id, "Post not found")
    return f"""<p>{post}</p>"""
