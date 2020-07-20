import { dbConnect } from "@/utils/index";
import Horror from "@/models/Horror";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const horrors = await Horror.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: horrors });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const horror = await Horror.create(req.body); /* create a new model in the database */
        res.status(201).json({ success: true, data: horror });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
