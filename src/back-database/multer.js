import multer from "multer";

const storage = multer.diskStorage({

    // Pasta onde os arquivos serão salvos
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    // Nome que o arquivo terá
    filename: (req, file, cb) => {

        const nomeArquivo = Date.now() + "-" + file.originalname;

        cb(null, nomeArquivo);
    }

});

const upload = multer({ storage });

export default upload;