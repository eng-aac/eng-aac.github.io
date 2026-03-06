const fs = require('fs');
const path = require('path');

const distPath = path.join( __dirname, 'dist/portfolio-daac' );
const indexFile = path.join( distPath, 'index.html' );
const errorFile = path.join( distPath, '404.html' );
const noJekyllFile = path.join( distPath, '.nojekyll' );

try {

  let html = fs.readFileSync(indexFile, 'utf8');
  const recoveryScript = `
    <script>
      ( function() {
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;

        if ( redirect && redirect != location.href ) {
          history.replaceState( null, null, redirect );
        }
      } )();
    </script>`
  ;
  html = html.replace( '</body>', recoveryScript + '</body>' );
  fs.writeFileSync( errorFile, html );
  
  fs.writeFileSync( noJekyllFile, '' );
  
  console.log( 'Post-build completado: 404.html y .nojekyll creados.' );
} catch ( error ) {
  console.error( 'Error en postbuild:', error );
}