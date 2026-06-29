import model from '../models/createNew-model.js'

async function createNew(title, mainImage, userId, categoryId, texts, images) {

    if (!title || !mainImage || !userId || !categoryId || !texts) {
        throw { status: 400, message: "need to fill all the fields" }

    } else if (title.length > 100 || title.length < 15) {
        throw { status: 400, message: "title needs to be between 15 and 100 characters" }

    } else {

        const newNew = await model.createNew(
            title,
            mainImage,
            userId,
            categoryId
        )

        const newId = newNew[0].insertId

        const results = await Promise.all(
            texts.map(async (content, index) => {
                if (content.type === "paragraph" || content.type === "subTitle") {
                    const paragraphType = content.type === "subTitle" ? "subtitle" : "paragraph"
                    const paragraphResult = await model.createNewsParagraphs(content.text, paragraphType, newId)
                    const contentId = paragraphResult[0].insertId

                    await model.joinParagraphsAndImages(
                        paragraphType,
                        contentId,
                        newId,
                        index
                    )

                    return {
                        type: "text",
                        contentId
                    }
                }
            })
        )

        if (Array.isArray(images)) {
            await Promise.all(
                images.map(async (image, index) => {
                    const imageOrder = image.image_order ?? index

                    const imageResult = await model.createNewsImages(
                        image.url,
                        newId,
                        imageOrder
                    )

                    const contentId = imageResult[0].insertId

                    await model.joinParagraphsAndImages(
                        "image",
                        contentId,
                        newId,
                        index
                    )
                })
            )
        }

        return results
    }
}

export default {
    createNew
}