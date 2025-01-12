class Media{
    constructor(title,ratings=[ ]){
      this._title=title
      this._ratings=ratings
      this._ischeckedOut=false;
    }
    get title(){
      return this._title;
    }
    get ratings(){
      return this._ratings;
    }
    get ischeckedOut(){
      return this._ischeckedOut;
    }
    set ischeckedOut(bool){
      this._ischeckedOut=bool;
    }
    getAverageRating(){
      const sum=this._ratings.reduce((a,b)=>a+b,0);
      const avg=sum/this._ratings.length;
      return avg;
  
    }
    toggleCheckOutStatus(){
        this._ischeckedOut=!this._ischeckedOut;
      
    }
    addRating(rating){
      this._ratings.push(rating);
  
    }
  }
  
  class Book extends Media{
    constructor(title,pages,author,ratings=[ ]){
      super(title,ratings);
      this._author=author;
      this._pages=pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(title,director,runtime){
      super(title);
      this._director=director;
      this._runtime=runtime;
    }
    
  }
  
  class CD{
    
  }
  
  const historyOfEverything=new Book('A Short History of Nearly Everything',544,'Bill Bryson');
  
  const speed=new Movie('Speed','Jan de Bont',116);
  
  speed.toggleCheckOutStatus();
  historyOfEverything.toggleCheckOutStatus();
  console.log(speed.ischeckedOut);
  console.log(historyOfEverything.ischeckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  console.log(speed.getAverageRating());
  console.log(historyOfEverything.ratings)