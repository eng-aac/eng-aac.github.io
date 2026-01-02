const fs = require('fs');
const path = require('path');

const distPath = path.join( __dirname, 'dist/portfolio-daac' );
const indexFile = path.join( distPath, 'index.html' );
const errorFile = path.join( distPath, '404.html' );

try {
  if ( fs.existsSync( indexFile ) ) fs.copyFileSync( indexFile, errorFile );
  else console.error( 'Error: No se encontró index.html en ' + distPath );
} catch ( error) {
  console.error( 'Error al copiar el archivo:', error );
}