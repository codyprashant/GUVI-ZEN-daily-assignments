class Movie {
	
	constructor(title, studio, rating='PG') {
		this.title = title;
		this.studio = studio;
		this.rating = rating;
	}
	
    getPG(movieArray){
		var filteredRec = movieArray.filter((movieRec ) => movieRec =='PG' )
      return filteredRec;
    }
    
}

let mov = new Movie('Casiono Royale', 'Eon Productions', 'PG13');