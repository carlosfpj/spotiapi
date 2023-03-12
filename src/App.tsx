import './App.css';
import './web-api-examples/authentication/authorization_code/app.js';

function App() {
  return (
    <div className="App">
      <body>
        <div>
          <div id='login'>
            <h3>Login to spotify</h3>
            <a href='/login'>Log in</a>
          </div>
          <div id='loggedin'>
          </div>
        </div>

        <script id="loggedin-template" type="text/x-handlebars-template">
          <h1>Logged in as </h1>
          <img alt='avatar' id="avatar" width="200" src="" />
          <dl>
            <dt>Display name</dt><dd></dd>
            <dt>Username</dt><dd></dd>
            <dt>Email</dt><dd></dd>
            <dt>Spotify URI</dt><dd><a href=""></a></dd>
            <dt>Link</dt><dd><a href=""></a></dd>
            <dt>Profile Image</dt><dd></dd>
          </dl>
          <p><a href="/">Log in again</a></p>
        </script>
      </body>
    </div>
  );
}

export default App;
