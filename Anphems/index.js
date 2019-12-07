var line_index_usa = 0;
var line_index_canada = 0;
var line_index_uk = 0;

function highlightIs( line ) {
  var iiis = ( "I |I,|I.|I?|I!|I'|I:|I;" ).split( '|' );

  for ( var i=0; i<iiis.length; i++ ) line = line.split( iiis [ i ] )
    .join( '<span class="highlight">' + iiis [ i ] + '</span>' );

  return line;
}

function updateLineUSA( event ) {
  var output_div = event.target;
  var output_class = output_div.parentNode.className.split( 'lyrics' ).pop( );

  output_div.innerHTML = highlightIs( lyrics4_output[ line_index_usa ] );

  line_index_usa++;
  if ( line_index_usa >= lyrics4_output.length )
    line_index_usa = 0;

    output_div.start( );
}

function updateLineCanada( event ) {
  var output_div = event.target;
  var output_class = output_div.parentNode.className.split( 'lyrics' ).pop( );

  output_div.innerHTML = highlightIs( lyrics2_output[ line_index_canada ] );

  line_index_canada++;
  if ( line_index_canada >= lyrics2_output.length )
    line_index_canada = 0;

    output_div.start( );
}

function updateLineUK( event ) {
  var output_div = event.target;
  var output_class = output_div.parentNode.className.split( 'lyrics' ).pop( );

  output_div.innerHTML = highlightIs( lyrics5_output[ line_index_uk ] );

  line_index_uk++;
  if ( line_index_uk >= lyrics5_output.length )
    line_index_uk = 0;

    output_div.start( );
}

function initAnthems( ) {
  var output_usa = document.querySelector( '.lyricsUSA > marquee' );
  output_usa.onfinish = updateLineUSA;

  var event = document.createEvent( 'HTMLEvents' );
  event.initEvent( 'finish', true, true);
  event.eventName = 'finish';
  output_usa.dispatchEvent( event );



  var output_canada = document.querySelector( '.lyricsCANADA > marquee' );
  output_canada.onfinish = updateLineCanada;

  var event = document.createEvent( 'HTMLEvents' );
  event.initEvent( 'finish', true, true);
  event.eventName = 'finish';
  output_canada.dispatchEvent( event );


  var output_uk = document.querySelector( '.lyricsUK > marquee' );
  output_uk.onfinish = updateLineUK;

  var event = document.createEvent( 'HTMLEvents' );
  event.initEvent( 'finish', true, true);
  event.eventName = 'finish';
  output_uk.dispatchEvent( event );
}

window.onload = initAnthems;
