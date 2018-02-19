$( document ).ready(function() {


    // Declare variables for accusations
    


    // Create array to display accusations
    for (let i = 1; i < 101; i++) {

        let FRIEND_NAME = ['Daniel', 'Josh', 'Jess', 'Mike', 'Ross']; //Create array for friends names
        let WEAPON_NAME = ['Stapler', 'Paper Clip', 'Fairy Dust', 'Fork', 'Spoon', 'Club', 'Glass', 'Shoe', 'Knife', 'RPG', 'AK-47', 'Bomb', 'Plastic Bag', 'Firing Squad', 'Toaster', 'Banana Peel', 'Car', 'Can of beans','Bee Hive', 'Jumper Cables']; //Create array for weapon names
        let LOCATION_NAME = ['Copy Room', 'Bathroom', 'Driveway', 'Closet', 'Diner']; //Create array for locations

        $accusation = $('<h3></h3>'); //Create H3 to add to page
        $accusation.addClass('acc-button'); //add button class
        $accusation.addClass('col-12 col-md-4 d-flex flex-row justify-content-center align-items-center m-2')//Add bootstrap class
        $accusation.text('Accusation ' + i) // Number each accusation
        $('.row').append($accusation); //add each accusation
        console.log('plus ' + i); // Print to console to track number of additions


        //Create function to create alert for each h3
        function accusation(FRIEND_NAME, WEAPON_NAME, LOCATION_NAME) {
            return function () {
                alert('I accuse ' + FRIEND_NAME + ', with the ' + WEAPON_NAME + ' in the ' + LOCATION_NAME);
            }
        }
        //create variable to store variables from array into a function
        let createAccusation = accusation(FRIEND_NAME[i % FRIEND_NAME.length],WEAPON_NAME[i % WEAPON_NAME.length],LOCATION_NAME[i % LOCATION_NAME.length]);

        //Add click listener to display alert
        $($accusation).click(createAccusation);

    }//END FOR LOOP





    

    
});