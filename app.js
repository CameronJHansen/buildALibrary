// defines Media super class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  // returns average value of array elements
  getAverageRating() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const averageRating = (this.ratings.reduce(reducer) / this.ratings.length).toFixed(2);
    return averageRating;
  }

  // false becomes true, true becomes false
  toggleCheckOutStatus() {
    this.isCheckedOut === true ? this.isCheckedOut = false : this.isCheckedOut = true;
  }

  // adds new rating to ratings array
  addRating(rating) {
    this.ratings.push(rating);
  }
}

// defines Book subclass
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

// defines Movie subclass
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

// defines CD subclass
class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }

  // when invoked, order of elements in songs array is randomized
  shuffle() {
  for(let i = this.songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = this.songs[i];
    this.songs[i] = this.songs[j];
    this.songs[j] = temp;
}
  }
}

// various method tests performed
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const astroworld = new CD('Astroworld', 'Travis Scott', ['Stargazing', 'Carousel', 'Sicko Mode', 'R.I.P. Screw', 'Stop Trying to be God']);

console.log(astroworld.songs);
astroworld.shuffle();
console.log(astroworld.songs);


