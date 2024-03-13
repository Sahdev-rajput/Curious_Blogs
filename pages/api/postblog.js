// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('node:fs');

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
    if (err) {
        res.status(500).json({"error": "File does not Exist"});
        return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
