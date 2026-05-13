import db from '../db.js'

async function createNew(title, mainImage, userId, categoryId){

    const query = "insert into News (title, main_image, views, adminId) values(?, ?, ?, ?)"
    return db.promise().query(query, [title, mainImage, userId, categoryId])
}

async function createNewsParagraphs(text, paragraphOrder, newId){

    const query = "insert into Paragraphs (text, paragraph_order, newId) values(?, ?, ?)"
    return db.promise().query(query, [text, paragraphOrder, newId])
}

async function createNewsImages(url, imageOrder, newId){

    const query = "insert into Images (url, image_order, newId) values(?, ?, ?)"
    return db.promise().query(query, [url, imageOrder, newId])
    
}