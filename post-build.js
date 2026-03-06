const fs = require('fs');
const path = require('path');

const distPath = path.join( __dirname, 'docs' );
const indexFile = path.join( distPath, 'index.html' );
const errorFile = path.join( distPath, '404.html' );
const noJekyllFile = path.join( distPath, '.nojekyll' );

try {
  let html = fs.readFileSync( indexFile, 'utf8' );
  const redirectScript = `
  <script>
    ( function() {
      var path = window.location.pathname.replace( window.location.search, "" );
      window.location.replace( window.location.origin + '/?/' + path.substring(1) );
    }) ();
  </script>`;
  
  html = html.replace( '<head>', '<head>' + redirectScript );
  
  fs.writeFileSync( errorFile, html );
  fs.writeFileSync( noJekyllFile, '' );
  
  console.log( 'Post-build exitoso: 404.html (con redirección) y .nojekyll creados.' );
} catch ( error ) {
  console.error( 'Error:', error );
}