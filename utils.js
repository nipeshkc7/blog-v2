function appendDefaultAuthor(post){
    return {
        ...post,
        primary_author: {
            name: "Arpan Kc",
            url: "https://arpankc.com"
        }
    }
}

module.exports = {
    appendDefaultAuthor
}