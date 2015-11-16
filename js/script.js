$(document).ready(function() {
    var n = new Poller();
    var results = [];

    function updateView() {

    	fruit = {
	      type: 'fruits',
	      limit: 10
	    };
	    //add vegies to results
    	n.poll(this.defaults, callback);
    	//add fruits to result
    	n.poll(fruit, callback);
    	//sort in numberical order
    	results.sort(compare);
    	//slice out everything after the tenth entry
    	results = results.slice(0,10);
    	//console.log("size of: "+ results.length);
    	//console.log(results);

    	var $table = $( "<table></table>" );

		for ( var i = 0; i < results.length; i++ ) {
		    var res = results[i];
		    var $line = $( "<tr></tr>" );
		    $line.append( $( "<td></td>" ).html( (i+1) + ". " + res.name + " <p>" + res.count + "</p> mentions") );
		    $table.append( $line );
		}
		//$table.appendTo( document.body );
		//$table.appendTo( $( "#results" ) );
		//results = [];
		$('#results').html($table);
		//document.getElementById("results").outerHtml = $table;
    }

    var compare = function compare(a,b) {
	  if (a.count > b.count)
	    return -1;
	  if (a.count < b.count)
	    return 1;
	  return 0;
	}

    var callback = function callback(payload) {
    	//get the largest of each
    	console.log("Got payload");
    	//console.log(payload);
    	//console.log(payload.sort(compare));
    	for(i = 0; i < payload.length; ++i) {
    		results.push(payload[i]);
    	}
    	//results.push(payload);
    }
    setInterval(function() { updateView() }, 1500); //change to 150000
});
