// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('node:fs');

export default async function handler(req, res) {
  let data=await fs.promises.readdir("blogdata");
  let allBlogs=[];
  let my_file;
  for(let index=0;index<data.length;index++)
  {
    const item=data[index];
    my_file=await fs.promises.readFile(('blogdata/'+item),'utf-8');
    allBlogs.push(JSON.parse(my_file));
  }
  // fs.promises.readdir('../../NEXT JS TUTORIAL/curious_blogs/blogs/', (err, data) => {
  //   let allBlogs=[];
  //   data.forEach((data)=>{
  //     console.log(typeof(data));
  //     fs.readFile('../../NEXT JS TUTORIAL/curious_blogs/blogs/'+data, (err, data) => {
  //       allBlogs.push(data);
  //       if (err) throw err;
  //       console.log(data);
  //     });
  //   })
  // });
  res.status(200).json(allBlogs);
}
