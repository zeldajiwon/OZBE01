const imageContainer = document.getElementById('image-container');
const stopButton = document.getElementById('stop-button');
let imageIndex = 0;
let intervalId;

const imageURLs = [
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151002_154%2Fyaaho6_1443774788614cFwnw_GIF%2F1421238445669.GIF&type=sc960_832_gif',
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20130704_65%2Fdokong_00_137286727968071qRE_JPEG%2F-1916505659.jpg&type=sc960_832',
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDNfMTAy%2FMDAxNTk2NDMyNTA5Mjcw.IZspM6VrLraThuvt5TJ5WzwQ7LtDetdQIRY3gKdti64g.fhpcOW_mH_IGN4CIJuOtG9gQakGoScOjsGOY6GCw2l0g.JPEG.hahahi31%2F1596432508310.jpg&type=sc960_832'
];

function changeBackgroundImage(){
    const imageURL = imageURLs[imageIndex];
    imageContainer.style.backgroundImage = `url${imageURL})`;

    imageIndex = (imageIndex + 1) % imageURLs.length;

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
    });

    intervalId = setInterval(changeBackgroundImage, 2000);
}