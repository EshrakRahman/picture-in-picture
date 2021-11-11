/* Element selector*/
const videoElement = document.querySelector("#video");
const btnElement = document.querySelector("#btn");

// create an async function and load video to screen

async function selectMediaStream() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        console.log(e);
    }
}


btnElement.addEventListener('click', async () => {
    btn.disabled = true;

    await videoElement.requestPictureInPicture();

    btn.disabled = false;
})

// on load
selectMediaStream();