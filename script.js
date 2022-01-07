window.onload = () => {

    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');
    
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    const audio_player = decoument.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs = [

        {
            title: 'Faded',
            artist: 'Alan Walker',
            song_path: 'music/Faded.mp3',
            img_path: 'images/faded.jpg'
        },

        {
            title: '',
            artist: '',
            song_path: '',
            img_path: ''
        },

        {
            title: '',
            artist: '',
            song_path: '',
            img_path: ''  
        },

        {
            title: '',
            artist: '',
            song_path: '',
            img_path: ''
        }
        
    ]

    InitPlayer();

    function InitPlayer() {

    }

}
