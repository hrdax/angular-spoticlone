const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [
            {
                "_id": 1,
                "name": "Visions",
                "album": "There Is A Hell Believe Me I've Seen It. There Is A Heaven Let's Keep It A Secret",
                "cover": "https://i5.walmartimages.com/seo/There-Is-A-Hell-Believe-Me-I-ve-Seen-It-There-Is-A-Heaven-Let-s-Keep-It-A-Secret-CD_77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
                "artist": {
                    "name": "Bring Me The Horizon",
                    "nickname": "Bring Me The Horizon",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-visions.mp3`
            },
            {
                "_id": 2,
                "name": "Aligator Blood",
                "album": "There Is A Hell Believe Me I've Seen It. There Is A Heaven Let's Keep It A Secret",
                "cover": "https://i5.walmartimages.com/seo/There-Is-A-Hell-Believe-Me-I-ve-Seen-It-There-Is-A-Heaven-Let-s-Keep-It-A-Secret-CD_77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
                "artist": {
                    "name": "Bring Me The Horizon",
                    "nickname": "Bring Me The Horizon",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-alligatorblood.mp3`
            },
            {
                "_id": 3,
                "name": "Forsaken",
                "album": "Systematic Chaos",
                "cover": "https://upload.wikimedia.org/wikipedia/en/e/e3/Dream_Theater_-_Systematic_Chaos.jpg",
                "artist": {
                    "name": "Dream Theater",
                    "nickname": "Dream Theater",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-forsaken.mp3`
            },
            {
                "_id": 4,
                "name": "Glass Heart",
                "album": "Lost Souls",
                "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b2/d3/7e/b2d37e39-2aa7-d5ce-060e-7aed6fb92b97/cover.jpg/600x600bf-60.jpg",
                "artist": {
                    "name": "Caskets",
                    "nickname": "Caskets",
                    "nationality": "Australian"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-glassheart.mp3`
            },
            {
                "_id": 5,
                "name": "Drowned in Emotion",
                "album": "Lost Souls",
                "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b2/d3/7e/b2d37e39-2aa7-d5ce-060e-7aed6fb92b97/cover.jpg/600x600bf-60.jpg",
                "artist": {
                    "name": "Caskets",
                    "nickname": "Caskets",
                    "nationality": "Australian"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-drowned.mp3`
            },
            {
                "_id": 6,
                "name": "Like a Villain",
                "album": "THE DEATH OF PEACE OF MIND",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/The_Death_of_Peace_of_Mind_Bad_Omens.png/220px-The_Death_of_Peace_of_Mind_Bad_Omens.png",
                "artist": {
                    "name": "Bad Omens",
                    "nickname": "Bad Omens",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-likeavillain.mp3`
            },
            {
                "_id": 7,
                "name": "Limits",
                "album": "Finding God Before God Finds Me",
                "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/02/4e/bd024ede-f9f4-cc4d-c7c7-a58dbb45b1f5/22UM1IM05474.rgb.jpg/1200x1200bb.jpg",
                "artist": {
                    "name": "Bad Omens",
                    "nickname": "Bad Omens",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-limits.mp3`
            },
            {
                "_id": 8,
                "name": "Falling Away From Me",
                "album": "Issues",
                "cover": "https://upload.wikimedia.org/wikipedia/en/b/b6/KoRnIssues.jpg",
                "artist": {
                    "name": "Korn",
                    "nickname": "Korn",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-fallingaway.mp3`
            },
            {
                "_id": 9,
                "name": "Time of Dying",
                "album": "One-X",
                "cover": "https://upload.wikimedia.org/wikipedia/en/c/cf/One_X.png",
                "artist": {
                    "name": "Three Days Grace",
                    "nickname": "Three Days Grace",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-timeof.mp3`
            },
           
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }