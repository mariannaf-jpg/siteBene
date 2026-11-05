
const envelopeIntro = document.getElementById("envelopeIntro");
const openEnvelope = document.getElementById("openEnvelope");
const invitation = document.getElementById("invitation");

openEnvelope.addEventListener("click", () => {
  openEnvelope.classList.add("opening");

  window.setTimeout(() => {
    envelopeIntro.classList.add("opened");
    invitation.classList.add("visible");
    document.body.style.background = "#edf5ef";
  }, 750);
});
