/*

add a function for when each button is clicked

*/

/* WIN RESULTS */

document.getElementById("buttonTryDoor").addEventListener("click", function tryDoorResult() {
    document.getElementById("situationText").innerHTML = "After trying the door, it surprisingly just opened. Of course, as you step out, you're spotted by a guard who is wearing very old armor and only has a sword as a weapon. You notice that there is a sword lying around, but you also believe that you can use the martial arts to get yourself out of this mess. What will you do?"
    document.getElementById("buttonTryDoor").style.display = "none"
    document.getElementById("buttonTasteKoolaid").style.display = "none"
    document.getElementById("buttonRunIntoStone").style.display = "none"
    document.getElementById("buttonTryMartialArts").style.display = "inline"
    document.getElementById("buttonUseSword").style.display = "inline"
    document.getElementById("buttonCharge").style.display = "inline"
});

document.getElementById("buttonUseSword").addEventListener("click", function trySwordResult() {
    document.getElementById("situationText").innerHTML = "You pick up the sword, but as soon as you remember that you've never held a sword before, the guard charges at you. You hold up your sword in an attempt to block. It works and the guard is staggered. You take this chance to strike. You swing the sword and strike the guard. He falls and you're victorious. You notice a few escape routes such as a barred window, a vent on the floor, and a staircase made of stone. What is your next move?"
    document.getElementById("buttonTryMartialArts").style.display = "none"
    document.getElementById("buttonUseSword").style.display = "none"
    document.getElementById("buttonCharge").style.display = "none"
    document.getElementById("buttonTryStairs").style.display = "inline"
    document.getElementById("buttonTryVent").style.display = "inline"
    document.getElementById("buttonTryWindow").style.display = "inline"
});

document.getElementById("buttonTryStairs").addEventListener("click", function tryStairsResult() {
    document.getElementById("situationText").innerHTML = "You rush down the stairs and out of the jail. You are now a free man. However, you are still stuck in the wrong time period... and guards are still chasing you. Will you do?"
    document.getElementById("buttonTryStairs").style.display = "none"
    document.getElementById("buttonTryVent").style.display = "none"
    document.getElementById("buttonTryWindow").style.display = "none"
    document.getElementById("buttonTryBathroom").style.display = "inline"
    document.getElementById("buttonTryBridge").style.display = "inline"
    document.getElementById("buttonTryTech").style.display = "inline"
});
document.getElementById("buttonTryBathroom").addEventListener("click", function tryBathroomResult() {
    document.getElementById("situationText").innerHTML = "You sprint into the nearest restroom. You quickly check your surroundings and see a hole in the ground. You hesitate because that's disgusting. However you find it a necesary evil just in case it helps you find a way home. You peak over the edge to find... a portal? You assume that this is your shot, your only way out of this time period. You fit yourself into this very small hole. You wake up in the middle of the street. You scramble to your feet and go read a sign that says 'France, 1792'. You dont realize the significance of that date until you hear a loud thump in the background. You turn around to watch as a bloody blade is being raised. That is a guillotine, and YOU are stuck during the bloodiest time of the French Revolution."
    document.getElementById("buttonTryBathroom").style.display = "none"
    document.getElementById("buttonTryBridge").style.display = "none"
    document.getElementById("buttonTryTech").style.display = "none"
    document.getElementById("playAgainButton").style.display = "inline"


});





/* FAIL RESULTS */

document.getElementById("buttonTasteKoolaid").addEventListener("click", function tryKoolaidResult() {
    document.getElementById("buttonTryDoor").style.display = "none"
    document.getElementById("buttonTasteKoolaid").style.display = "none"
    document.getElementById("buttonRunIntoStone").style.display = "none"
    document.getElementById("situationText").innerHTML = "My only question is why? Why would you do that? NO! It was not Koolaid! Was Koolaid even a thing in this time period? You know what? Simply because you acted so stupidly this is a fail. YOU LOSE."
    document.getElementById("retryButton").style.display = "inline"
});
document.getElementById("buttonRunIntoStone").addEventListener("click", function tryWallResult() {
    document.getElementById("buttonTryDoor").style.display = "none"
    document.getElementById("buttonTasteKoolaid").style.display = "none"
    document.getElementById("buttonRunIntoStone").style.display = "none"
    document.getElementById("situationText").innerHTML = "Congratulations! After ramming your head into the stone wall multile times you died due to brain damage. Nobody bothered to clean you up either. YOU LOSE."
    document.getElementById("retryButton").style.display = "inline"

});
document.getElementById("buttonTryMartialArts").addEventListener("click", function tryMartialArtsResult() {
    document.getElementById("buttonTryMartialArts").style.display = "none"
    document.getElementById("buttonUseSword").style.display = "none"
    document.getElementById("buttonCharge").style.display = "none"
    document.getElementById("situationText").innerHTML = "You attempt to hit the guard with a reverse dragon kick combo. you leap high into the air, and land flat on your face. The gaurd stabs you while you're face down on the floor. YOU LOSE."
    document.getElementById("retryButton").style.display = "inline"

});

document.getElementById("buttonCharge").addEventListener("click", function tryMartialArtsResult() {
    document.getElementById("buttonTryMartialArts").style.display = "none"
    document.getElementById("buttonUseSword").style.display = "none"
    document.getElementById("buttonCharge").style.display = "none"
    document.getElementById("situationText").innerHTML = "You run at a whopping 5 miles per hour at the guard. The guard stares at you as you run. Just before you reach him he very slowly side steps. You miss, and with all of your momentum forward, you run straight into the wall head first. You die due to the blunt force of the wall. The guard also died due to the lack of brain cells after witnessing your super dumb escape attempt.  YOU LOSE."
    document.getElementById("retryButton").style.display = "inline"

});

document.getElementById("buttonTryVent").addEventListener("click", function tryVentResult() {
    document.getElementById("buttonTryStairs").style.display = "none"
    document.getElementById("buttonTryVent").style.display = "none"
    document.getElementById("buttonTryWindow").style.display = "none"
    document.getElementById("situationText").innerHTML = "You swiftly leap into the vent and pop out on the other side. You have now found yourself in the barracks, and the guards inside very quickly deduce that you are indeed the imposter. They kill you on the spot. YOU LOSE!"
    document.getElementById("retryButton").style.display = "inline"
});

document.getElementById("buttonTryWindow").addEventListener("click", function tryWindowResult() {
    document.getElementById("buttonTryStairs").style.display = "none"
    document.getElementById("buttonTryVent").style.display = "none"
    document.getElementById("buttonTryWindow").style.display = "none"
    document.getElementById("situationText").innerHTML = "You grab a nail file and start to file away at the bars on the window. After five hours you finally make a hole that you can fit through. You take three steps back and preform a running leap out of the window. You fall five stories to your death. YOU LOSE!"
    document.getElementById("retryButton").style.display = "inline"
});

document.getElementById("buttonTryBridge").addEventListener("click", function tryBridgeResult() {
    document.getElementById("buttonTryBathroom").style.display = "none"
    document.getElementById("buttonTryBridge").style.display = "none"
    document.getElementById("buttonTryTech").style.display = "none"
    document.getElementById("situationText").innerHTML = "You leap off of the bridge hoping to land in the river below. There's a river alright, a river of sewage! You crawl out and escape. However, you catch a severe case od dysentary and die 3 days later. YOU LOSE!"
    document.getElementById("retryButton").style.display = "inline"
});

document.getElementById("buttonTryTech").addEventListener("click", function tryTechResult() {
    document.getElementById("buttonTryBathroom").style.display = "none"
    document.getElementById("buttonTryBridge").style.display = "none"
    document.getElementById("buttonTryTech").style.display = "none"
    document.getElementById("situationText").innerHTML = "You realize that you have one thing on your side, TECHNOLOGY! you pull out your phone and dial 911. You sit there helples as guards charge at you and the 'no signal' tone blares at you. You remember that you're a special kind of stupid and that there is no cell service here. You throw your phone at the guards to no avail. They arrest you and take you back to your cell. YOU LOSE!"
    document.getElementById("retryButton").style.display = "inline"
});

document.getElementById("retryButton").addEventListener("click", function retryResult() {
    document.getElementById("situationText").innerHTML = "You have woken up after the craziest party of your life. While at first this day seems relatively normal, you realize that you're locked in a prison. However this is no ordinary prison. You notice that the walls are made of eroded stone, and instead of modern doors, there are very thick iron bars between you and freedom. You deduce that you've been teleported to the medieval era, based on your very little historical knowledge. 'You must useth thy brain to escape' is a phrase you can see written on the walls in what you can only hope and pray is red Koolaid. What is your first move?"
    document.getElementById("buttonTryDoor").style.display = "inline"
    document.getElementById("buttonTasteKoolaid").style.display = "inline"
    document.getElementById("buttonRunIntoStone").style.display = "inline"
    document.getElementById("retryButton").style.display = "none"
});

document.getElementById("playAgainButton").addEventListener("click", function againResult() {
    document.getElementById("situationText").innerHTML = "You have woken up after the craziest party of your life. While at first this day seems relatively normal, you realize that you're locked in a prison. However this is no ordinary prison. You notice that the walls are made of eroded stone, and instead of modern doors, there are very thick iron bars between you and freedom. You deduce that you've been teleported to the medieval era, based on your very little historical knowledge. 'You must useth thy brain to escape' is a phrase you can see written on the walls in what you can only hope and pray is red Koolaid. What is your first move?"
    document.getElementById("buttonTryDoor").style.display = "inline"
    document.getElementById("buttonTasteKoolaid").style.display = "inline"
    document.getElementById("buttonRunIntoStone").style.display = "inline"
    document.getElementById("playAgainButton").style.display = "none"
});
