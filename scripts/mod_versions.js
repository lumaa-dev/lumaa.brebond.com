const backrooms = [
    {
        name: "Alpha 0.0.1 (A)",
        modId: "A-0.0.1",
        modrinthId: "AfgfGd0P",
        releaseDate: new Date("Aug 16, 2022")
    },
    createModVersion("Alpha A0.0.2", "A-0.0.2A", "Qta8jcgN", new Date("Aug 31, 2022")),
    createModVersion("Alpha A0.0.3", "A-0.0.3A", "EYUkg2Bx", new Date("Sep 7, 2022")),
    createModVersion("Alpha A0.0.4", "A-0.0.4A", "FIoJX0Rt", new Date("Oct 12, 2022"))
]

/**
 * creates a mod version
 * @param {String} name Version name of the mod
 * @param {String} modId The mod identifier
 * @param {String} modrinthId The modrinth Version identifier
 * @param {Date} releaseDate The release date
 */
function createModVersion(name, modId, modrinthId, releaseDate) {
    return {
        name: name,
        modId: modId,
        modrinthId: modrinthId,
        releaseDate: releaseDate
    }
}