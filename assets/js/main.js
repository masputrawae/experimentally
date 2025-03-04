document.addEventListener("DOMContentLoaded", function () {
    const taglineElement = document.querySelector(".hero__tagline");
    const roles = JSON.parse(taglineElement.getAttribute("data-role-list"));
    let index = 0;
    function updateTagline() {
        taglineElement.textContent = roles[index];
        index = (index + 1) % roles.length;
    }
    updateTagline();
    setInterval(updateTagline, 2000);
});
