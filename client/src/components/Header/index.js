const Header = () => {
return (
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Zana Mathuthu's Professional Portfolio</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/in/zanamathuthu"
            >Zana Mathuthu's Professional Portfolio</a
          >
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="https://zanamama.github.io/Portfolio/">Home</a>
            </li>
            <li><a href="#project-section">About</a></li>
            <li>
              <a href="client/src/assets/docs/Zana Mathuthu - Resume 2021.pdf">Resume</a>
            </li>
            <li>
              <a href="https://calendly.com/zana-m/strategy-session-with-zana-mathuthu">Schedule Call</a>
            </li>
          </ul>
          <!-- <ul class="nav navbar-nav navbar-right">
            <li>
              <a
                href="https://www.google.com/search?q=Zana+Mathuthu&bih=637&biw=1406&hl=en&sxsrf=AOaemvIkl9Z5Y1OG2rlYMh7en5mpPqsHeA%3A1630619394982&ei=AkcxYbW-O8Pl_QaFsrqADw&oq=Zana+Mathuthu&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BQgAEJECOgUILhCRAjoFCAAQgAQ6CggAEIAEEIcCEBQ6BQguEIAEOgcILhCABBAKOgYIABAWEB46CAgAEBYQChAeOgQILhANOgQIABANSgQIQRgAUPR7WLKfAWC3oQFoAXAAeACAAV-IAe8HkgECMTOYAQCgAQHAAQE&sclient=gws-wiz&ved=0ahUKEwi1x7TOouHyAhXDct8KHQWZDvAQ4dUDCA8&uact=5"
                ><span class="glyphicon glyphicon-log-in"></span> More</a
              >
            </li>
          </ul> -->
        </div>
      </div>
    </nav>

    <div class="jumbotron">
      <div class="container text-center">
        <h1>Zana Mathuthu's Professional Portfolio</h1>
        <div class="row">
          <div class="d-inline-flex p-2 bd-highlight">
            <ul>
              <li id="reach">Reach Out To Me:</li>
              <li>Cell: 267-671-4412</li>
              <li>Zmathuthu@yahoo.com</li>
            </ul>
          </div>
        </div>
    </div>

    </body>

    );
    }