class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting =createElement('h3');


    }
    display(){
        var title =createElement('h2')
        title.html('car racing game');
        title.position(430,100);

        
        this.input.position(330,260);
        this.button.position(450,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name =this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Hello'+" "+player.name)
            this.greeting.position(330,160)
        });

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();


    }
}