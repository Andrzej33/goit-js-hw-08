import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
    

    const player = new Player(iframe)



const onPlay = function(data) {
    console.log(data)
};

player.on('play', onPlay);