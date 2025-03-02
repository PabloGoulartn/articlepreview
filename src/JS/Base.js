let iconShare = document.querySelector(".iconShare");
let popup = document.querySelector(".share");

function popupDisplay(display)
{
    return popup.style.display = display;
}

iconShare.addEventListener("mouseover", () => {
    popup.style.position = 'absolute';
    popupDisplay('flex');
});

iconShare.addEventListener("mouseout", () => {
    popupDisplay('none');
})
