const { Router } = require("express");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;
const auth = require("../auth/middleware");

const router = new Router();

router.get("/artwork", async (request, response) => {
  try {
    const art = await Artwork.findAll();
    response.json(art);
  } catch (error) {
    next(error);
  }
});

router.get("/artwork/bids", async (request, response) => {
  try {
    const limit = request.query.limit || 10;
    const offset = request.query.offset || 0;
    const art = await Artwork.findAndCountAll({
      limit,
      offset,
      include: [Bid],
      order: [[Bid, "amount", "DESC"]],
    });
    response.json(art);
  } catch (error) {
    next(error);
  }
});

router.get("/artwork/:Id", async (req, res, next) => {
  const artId = req.params.Id;
  try {
    const art = await Artwork.findByPk(artId);
    if (!art) {
      return res.status(404).send("Artwork not found");
    } else {
      return res.json(art);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/artwork/:Id/bids", async (req, res, next) => {
  try {
    const artworkId = parseInt(req.params.Id);
    const bids = await Bid.findOne({
      where: {
        artworkId: artworkId,
      },
    });
    if (bids) {
      res.send(bids);
    } else {
      res.status(404).send("No bids on artwork");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/artwork", async (req, res, next) => {
  try {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const minimumBid = req.body.minimumBid;
    if (!title || title === " ") {
      res.status(400).send("You must provide a title");
    }
    if (!imageUrl || imageUrl === " ") {
      res.status(400).send("You must provide an image url");
    }
    if (!minimumBid || minimumBid === " ") {
      res.status(400).send("You must provide a minimum bid");
    } else {
      const art = await Artwork.create(req.body);
      res.json(art);
    }
  } catch (e) {
    next(e);
  }
});

router.patch("/artwork/:id", auth, async (req, res) => {
  const art = await Artwork.findByPk(req.params.id);
  if (!art.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this homepage" });
  }
  const { title, imageUrl, minimumBid } = req.body;
  await art.update({ title, imageUrl, minimumBid });
  return res.status(200).send({ art });
});

router.delete("/artwork/:Id", async (req, res, next) => {
  try {
    const artId = parseInt(req.params.Id);
    const art = await Artwork.findByPk(artId, { include: Bid });
    if (!art) {
      res.status(404).send("Artwork not found");
    } else {
      art.destroy();
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
