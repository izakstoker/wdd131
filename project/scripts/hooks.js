const hooksVideos = [
    { id: 'TFk_Ktw2f1w', title: 'Palomar knot' },
    { id: '-cJm6TKmtu0', title: 'Clinch knot' },
    { id: '-xubtzqhXUA', title: 'Uni knot' },
    { id: 'QPFtY1EknSU', title: 'Blood knot' },
    { id: 'iv1aNhz7btU', title: 'Loop knot' },
    { id: '-_ftAGkewfE', title: 'Snell knot' },
    { id: '8H88QrRNrKg', title: 'Berkley Braid knot' },
    { id: '0YKeSp97pSU', title: 'Turle knot' }
];

function embedVideos(videoArray) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';

    videoArray.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'videoItem';

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = video.title;

        const iframe = document.createElement('iframe');
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = `https://www.youtube.com/embed/${video.id}`;
        iframe.title = video.title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        videoDiv.appendChild(videoTitle);
        videoDiv.appendChild(iframe);

        videoContainer.appendChild(videoDiv);
    });
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredVideos = hooksVideos.filter(video => video.title.toLowerCase().includes(searchQuery));
    embedVideos(filteredVideos);
});

embedVideos(hooksVideos);
