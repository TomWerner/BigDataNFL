$(function() {
    $( "#slider-range-ydline" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 20, 30 ],
        slide: function( event, ui ) {
            var start = 100 - ui.values[0];
            var end = 100 - ui.values[1];
            if (start > 50) { start = "Own " + (100 - start); } else { start = "Opp " + start; }
            if (end > 50) { end = "Own " + (100 - end); } else { end = "Opp " + end; }

            $( "#ydline-amount" ).val( "Yardline Range: " + start + " - " + end );
        }
    });
    var start = 100 - $( "#slider-range-ydline" ).slider( "values", 0);
    var end = 100 - $( "#slider-range-ydline" ).slider( "values", 1);
    if (start > 50) { start = "Own " + (100 - start); } else { start = "Opp " + start; }
    if (end > 50) { end = "Own " + (100 - end); } else { end = "Opp " + end; }

    $( "#ydline-amount" ).val( "Yardline Range: " + start + " - " + end );
});
$(function() {
    $( "#slider-range-togo" ).slider({
        range: true,
        min: 0,
        max: 10,
        values: [ 0, 5 ],
        slide: function( event, ui ) {
            var start = 10 - ui.values[0];
            var end = 10 - ui.values[1];

            $( "#togo-amount" ).val( "Yards to Go Range: " + start + " - " + end );
        }
    });
    var start = 10 - $( "#slider-range-togo" ).slider( "values", 0);
    var end = 10 - $( "#slider-range-togo" ).slider( "values", 1);

    $( "#togo-amount" ).val( "Yards to Go Range: " + start + " - " + end );
});