import Event from "../../../models/Event.model";
import GroupModel from "../../../models/Group.model";
import UserModel from "../../../models/User.model";
import { Request, Response } from "express";

export const getByUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // find events by user
    const events = await Event.find({ users: id });

    return res.status(200).json({ ok: true, data: events });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Error obteniendo eventos" });
  }
};
