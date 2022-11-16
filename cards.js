function random(num){
    return Math.floor(Math.random()*num);
}
  
function Card( players ){
    const deck = [
        ["A", 'Spades'],
        ["A", 'Diamonds'],
        ["A", 'Hearts'],
        ["A", 'Clubs'],
        [2, 'Spades'],
        [2, 'Diamonds'],
        [2, 'Hearts'],
        [2, 'Clubs'],
        [3, 'Spades'],
        [3, 'Diamonds'],
        [3, 'Hearts'],
        [3, 'Clubs'],
        [4, 'Spades'],
        [4, 'Diamonds'],
        [4, 'Hearts'],
        [4, 'Clubs'],
        [5, 'Spades'],
        [5, 'Diamonds'],
        [5, 'Hearts'],
        [5, 'Clubs'],
        [6, 'Spades'],
        [6, 'Diamonds'],
        [6, 'Hearts'],
        [6, 'Clubs'],
        [7, 'Spades'],
        [7, 'Diamonds'],
        [7, 'Hearts'],
        [7, 'Clubs'],
        [8, 'Spades'],
        [8, 'Diamonds'],
        [8, 'Hearts'],
        [8, 'Clubs'],
        [9, 'Spades'],
        [9, 'Diamonds'],
        [9, 'Hearts'],
        [9, 'Clubs'],
        [10, 'Spades'],
        [10, 'Diamonds'],
        [10, 'Hearts'],
        [10, 'Clubs'],
        ["J", 'Spades'],
        ["J", 'Diamonds'],
        ["J", 'Hearts'],
        ["J", 'Clubs'],
        ["Q", 'Spades'],
        ["Q", 'Diamonds'],
        ["Q", 'Hearts'],
        ["Q", 'Clubs'],
        ["K", 'Spades'],
        ["K", 'Diamonds'],
        ["K", 'Clubs']
    ];
    var playerss=[];
    var marks =[];
    for(var j=0; j<players.length; j++){
        var player=[];
        for ( var i=1; i<6; i++ ){
            var deckLength = deck.length;
            var ran = random(deckLength);
            player.push(deck[ran]);
            deck.splice(ran, 1);
        }
        playerss.push(player);
        console.log("-------------", playerss);
    }
    for(var k=0; k<players.length; k++){
        var mark=0;
        for(var l=0; l<5;l++){
            if(playerss[k][l][0]=="A"){
                mark=+1;
            }
            else if(playerss[k][l][0]=="J"){
                mark=+11;
            }
            else if(playerss[k][l][0]=="Q"){
                mark=+12;
            }
            else if(playerss[k][l][0]=="K"){
                mark=+13;
            }
            else{
                mark=+playerss[k][l][0];
            }
        }
        marks.push(mark);
    }
    console.log("Sum each marks", marks);
    var bg =marks[0];
    var location=0;
    for( var m=0; m<marks.length; m++ ){
        if(bg<marks[m]){
            bg = marks[m];
            location=m;
        }
    }
    console.log("Winner", players[location]);
    return `winner: ${players[location]}`;
}
  
Card(["John", "Marry", "Matin", "Ihor"]);