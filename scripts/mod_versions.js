const br_versions = [
    createModVersion("Alpha A0.0.1", "A-0.0.1", "AfgfGd0P", new Date("Aug 16, 2022"), true),
    createModVersion("Alpha A0.0.2", "A-0.0.2A", "Qta8jcgN", new Date("Aug 31, 2022"), true),
    createModVersion("Alpha A0.0.3", "A-0.0.3A", "EYUkg2Bx", new Date("Sep 7, 2022"), true),
    createModVersion("Alpha A0.0.4", "A-0.0.4A", "FIoJX0Rt", new Date("Oct 12, 2022"), true)
]

/**
 * Creates a mod version
 * @param {String} name Version name of the mod
 * @param {String} modId The mod identifier
 * @param {String} modrinthId The modrinth Version identifier
 * @param {Date} releaseDate The release date
 * @param {Boolean} unstable Is the version unstable or not
 */
function createModVersion(name, modId, modrinthId, releaseDate, unstable = false) {
    return {
        name: name,
        modId: modId,
        modrinthId: modrinthId,
        releaseDate: releaseDate,
        unstable: unstable
    }
}

/**
 * Converts it all in HTML
 */
function htmlify() {
    br_versions.reverse().forEach(v => {
        const main = document.createElement("div");
        const flex = document.createElement("div");
        const dName = document.createElement("div");
        // const status = document.createElement("div");
        const spray = document.createElement("div");
        const vName = document.createElement("h2");
        const release = document.createElement("p");
        const modrinth = document.createElement("a");
    
        main.id = v.modId;
        main.classList.add("modv");
        flex.style.display = "flex";
        flex.style.alignItems = "flex-start";
        dName.classList.add("name");
        dName.style.justifyContent = "normal"
        // status.classList = v.unstable ? "circle unstable" : "circle";
        spray.classList = v.unstable ? "spray unstable" : "spray";
        vName.innerText = v.name;
        release.classList.add("header")
        release.innerText = "- Sorti le " + v.releaseDate.toLocaleDateString();
        modrinth.classList.add("modrinth")
        modrinth.style.marginLeft = "17px"
        modrinth.href = "https://modrinth.com/mod/backrooms/version/" + v.modId;
        modrinth.innerText = "Voir plus";
    
        flex.append(spray)
        flex.append(dName)

        // dName.append(status)
        dName.append(vName)
        dName.append(release)
    
        main.append(flex)
        main.append(modrinth)
    
        document.getElementById("br_versions").append(main)
    });

    document.getElementById("br_versions").id = "modvs"
}