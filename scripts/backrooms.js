window.onload = () => {
    updateSelect();
    document.body.style.removeProperty("overflow");
    location.href = setLinkId("up");

    htmlify(document.getElementById("br_versions"))
}

function updateSelect() {
    if (!linkHasId() && !location.href.endsWith("up")) {
        location.href = location.href + "#description";
    }
    buttons();
    const s = selected();
    s.tab.classList.add("visible");
    s.bubble.classList.add("readable");

    function selected() {
        if (location.href.endsWith("description")) {
            return { tab: document.getElementById("description"), bubble: document.getElementsByClassName("description")[0] };
        } else if (location.href.endsWith("images")) {
            return { tab: document.getElementById("images"), bubble: document.getElementsByClassName("images")[0] };
        } else if (location.href.endsWith("versions")) {
            return { tab: document.getElementById("versions"), bubble: document.getElementsByClassName("versions")[0] };
        } else if (location.href.endsWith("links")) {
            return { tab: document.getElementById("links"), bubble: document.getElementsByClassName("links")[0] };
        } else {
            location.href = setLinkId("description");
            return { tab: document.getElementById("description"), bubble: document.getElementsByClassName("description")[0] };
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