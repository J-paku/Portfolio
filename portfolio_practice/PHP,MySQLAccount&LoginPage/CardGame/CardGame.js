var transverse = 4;
var length = 3;

function CardSetting(transverse, length){
    for (var i = 0; i < transverse * length; i += 1){
         var card = document.createElement('div');
         card.classList.add('card');
        
         var cardInner = document.createElement('div');
         cardInner.className = 'card-inner';

         var cardFront = document.createElement('div');
         cardFront.className = 'card-front';

         var cardBack = document.createElement('div');
         cardBack.className = 'card-back';

         cardInner.appendChild(cardFront);
         cardInner.appendChild(cardBack);
         card.appendChild(cardInner);
         (function (c) {
            card.addEventListener('click',function() {
                c.classList.toggle('flipped');
         });
        })(card);
         document.body.appendChild(card);
    }
}

CardSetting(transverse, length);
