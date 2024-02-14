function play() {
    //step-1: hide the home screen, to hide the screen and the class hidden to the home section.
    const homeSection = document.getElementById('home-screen');
    // console.log(homeSection.classList);
    homeSection.classList.add('hidden');

    //step-2: show the playground 
    const playgroundSection = document.getElementById('play-ground');
    console.log(playgroundSection.classList);
}