const username = "Lumaa";
const slog = "Développeur avec la tête vide.";

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

window.onload = () => {    
    // set appearence
    setAppearence()

    // slog
    const slogs = document.querySelectorAll(".slog")

    for (let i = 0; i < slogs.length; i++) {
        const element = slogs[i];
        element.innerText = slog;
    }

    // username
    const ins = document.querySelectorAll(".username")

    for (let i = 0; i < ins.length; i++) {
        const element = ins[i];
        element.innerText = username;
    }

    // share
    const shares = document.querySelectorAll(".share")

    for (let i = 0; i < shares.length; i++) {
        const element = shares[i];
        element.onclick = () => { 
            let ShareData = { url: `${setLinkId(element.parentElement.children[1].id)}` }
            if (navigator.canShare(ShareData) && window.mobileAndTabletCheck()) {
                navigator.share(ShareData)
            } else {
                document.body.focus({ preventScroll: false })
                if (document.hasFocus()) {
                    navigator.clipboard.writeText(ShareData.url)
                    .catch((e) => alert(e))
                    .then(() => window.location.href = ShareData.url)
                }
            }
        }
    }

    // back button
    if (history.length > 0) {
        setupHome();
    }
    
    // footer
    setFooter()
}

// back button
function setupHome() {
    const dbacks = document.querySelectorAll("div.back");
    if (dbacks.length > 0) {
        dbacks.forEach((b) => {
            const belement = document.createElement("a")
            const img = document.createElement("img")
            
            belement.classList.add("styleless")
            belement.href = "./"
            img.src = "assets/pfp.png";
    
            belement.append(img)
            b.append(belement);
        })
    }
}

// share links / go to tag

function linkHasId() {
    return location.href.match(/\#[a-z]*$/g)?.length > 0 ?? false;
}

function setLinkId(id) {
    if (linkHasId()) {
        return `${location.href.replace(/\#[a-z]*$/g, "")}#${id}`
    } else {
        return `${location.href}#${id}`;
    }
}

// make enumerators (in case)
function Enum(...arguments){
    for(var i = 0; i < arguments.length; ++i) {
        this[arguments[i]] = i;
    }
    return this;
}

function setFooter(additionalText = "") {
    const footerPlace = document.createElement("div");
    footerPlace.classList.add("footer");

    const small = document.createElement("p")
    small.innerText = `This website made in HTML, CSS, JavaScript by Lumaa. Special shoutout to Rombond, PatateGivrée and Mary.\n${additionalText.trim()}`

    const switchAppearence = document.createElement("button")
    switchAppearence.classList.add("calm")
    switchAppearence.innerText = "Switch Appearences"
    switchAppearence.onclick = () => {
        localStorage.setItem("theme", getAppearence() == "light" ? "dark" : "light")
        setAppearence()
    }

    footerPlace.append(small);
    footerPlace.append(switchAppearence);
    document.body.append(footerPlace)
}

function setAppearence() {
    const actual = getAppearence()
    switch (actual) {
        case "light":
            document.body.classList.value = "light"
            break;
        case "dark":
            document.body.classList.value = "dark"
            break;
        default:
            localStorage.setItem("theme", "dark")
            document.body.classList.value = "dark"
            break;
    }
}

function getAppearence() {
    let x = localStorage.getItem("theme")
    if (x == "dark" || x == "light") {
        return x;
    } else {
        localStorage.setItem("theme", "light");
        return "light";
    }
}