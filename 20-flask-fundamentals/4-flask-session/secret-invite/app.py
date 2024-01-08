from flask import Flask, request, render_template, session, redirect

app = Flask(__name__)
app.config["SECRET_KEY"] = "JFDLKAYUEFJNdfsha3948dfsl"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login-form")
def show_login_form():
    return render_template("login-form.html")


@app.route("/login")
def verify_secret_code():
    SECRET = "chickenz_are_gr8"
    entered_code = request.args["secret_code"]

    if entered_code == SECRET:
        session["entered-pin"] = True
        return redirect("/secret-invite")
    else:
        return redirect("/login-form")


@app.route("/secret-invite")
def show_secret_invite():
    if session.get("entered-pin", False):
        return render_template("invite.html")
    else:
        return redirect("/login-form")
