import db from '../db.js'

async function createNew(title, mainImage, userId, categoryId) {

    const query = "insert into News (title, main_image, user_id, category_id) values(?, ?, ?, ?)"
    return db.promise().query(query, [title, mainImage, userId, categoryId])
}

async function createNewsParagraphs(text, type, newId) {

    const query = "insert into Paragraphs (text, type, new_id) values(?, ?, ?)"
    return db.promise().query(query, [text, type, newId])
}

async function createNewsImages(url, newId, imageOrder) {

    const query = "insert into Images (url, new_id, image_order) values(?, ?, ?)"
    return db.promise().query(query, [url, newId, imageOrder])
}

async function joinParagraphsAndImages(type, contentId, newId, contentOrder) {

    const query = "insert into NewsContentOrder (type, content_id, new_id, content_order) values(?, ?, ?, ?)"
    return db.promise().query(query, [type, contentId, newId, contentOrder])
}

export default {
    createNew,
    createNewsParagraphs,
    createNewsImages,
    joinParagraphsAndImages
}