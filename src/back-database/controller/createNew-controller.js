import model from '../models/createNew-model.js'

async function createNew(title, mainImage, userId, categoryId, texts,){

    if(!title || !mainImage || !userId || !categoryId || !texts){
        throw { status: 400, message: "need to fill all the fields"}
    } else if (title.length > 100 || title.length < 15 ){
        throw { status: 400, message: "title needs to be between 15 and 100 characters"}
    } else {

        const newNew = await model.createNew(title, mainImage, userId, categoryId)
        console.log(newNew)
        console.log(newNew[0].insertId)

        await createParagraphs(texts, newNew[0].insertId)
    }
}

async function createParagraphs(texts, newId){

    console.log(texts)
}

export default {
    createNew,
    createParagraphs
}