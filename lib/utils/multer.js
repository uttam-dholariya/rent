import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Ajsbgsyujdgyfg")
      cb(null, 'uploads/') // Set the destination folder
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) // Set the file name
    }
  });
const uploadImg = multer({storage: storage});

export default uploadImg;