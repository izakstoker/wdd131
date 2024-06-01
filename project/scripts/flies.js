const fliesVideos = [
    { id: 'HlO1e8zqWdQ', title: 'Elk Hair Caddis' },
    { id: 'F_S6iHQFxWo', title: 'Parachute Adams' },
    { id: 'RmZ1UD57Ue4', title: 'Royal Wulff' },
    { id: 'G9f9mXYA9ws', title: 'Griffiths Gnat' },
    { id: 'k_xQjMkKKmY', title: 'Blue Winged Olive' },
    { id: 'oK167pJZF1I', title: 'Chernobyl Ant' },
    { id: 'Gp4rV1PYPHM', title: 'Comparadun' },
    { id: '4oB_tdFqM-Q', title: 'Adams' }
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
    const filteredVideos = fliesVideos.filter(video => video.title.toLowerCase().includes(searchQuery));
    embedVideos(filteredVideos);
});

embedVideos(fliesVideos);
