window.onload = () => {
    updateSelect();
    document.body.style.removeProperty("overflow");
    location.href = setLinkId("up");
}

function updateSelect() {
    if (!linkHasId() && !location.href.endsWith("up")) {
        location.href = location.href + "#description";
    }
    buttons();
    const d = selected();
    d.classList.add("visible");

    // wtf u doin' here?
    function selected() {
        if (location.href.endsWith("description")) {
            return document.getElementById("description");
        } else if (location.href.endsWith("images")) {
            return document.getElementById("images");
        } else if (location.href.endsWith("versions")) {
            return document.getElementById("versions");
        } else if (location.href.endsWith("links")) {
            return document.getElementById("links");
        } else if (location.href.endsWith("up")) {
            return;
        } else {
            location.href = setLinkId("description");
            return document.getElementById("description");
        }
    }

    function buttons() {
        const switchBtns = document.querySelectorAll("button.switch");
        switchBtns.forEach((btn) => btn.onclick = () => { 
            location.href = setLinkId(btn.parentElement.id);
            location.reload();
            location.href = setLinkId("up");
        });
    }
}

function linkHasId() {
    return location.href.match(/(\#[a-z]*)+$/g)?.length > 0 ?? false;
}

function setLinkId(id) {
    if (linkHasId()) {
        return `${location.href.replace(/(\#[a-z]*)+$/g, "")}#${id}`;
    } else {
        return `${location.href}#${id}`;
    }
}