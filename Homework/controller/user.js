import fs from "fs";
import path from "path";

export const userGet = (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "Homework", "model", "users.json"))
  );
  return res.send(data);
};

export const userDelete = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
export const userPost = (req, res) => {
  const { name, email, password, age } = req.body;
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "Homework", "model", "users.json"))
  );
  data.push({ id: data.at(-1)?.id + 1 || 1, name, email, password, age });
  fs.writeFileSync(path.join(process.cwd(), "Homework", "model", "users.json"),JSON.stringify(data))
  return res.send("post");
};
