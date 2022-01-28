import { Request, Response } from "express";
import EmailService from "../services/EmailService";
const users = [{ name: "diego", email: "diego@asdf.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "diego fernances", email: "diego@aol.com" },
      message: { subject: "Some Subject", body: "Hey let's go to the party" },
    });

    return res.send();
  },
};
