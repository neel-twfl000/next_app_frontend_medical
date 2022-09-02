// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let data = [{
  name:"Indranil Swarnakar",
  profession:"Fullstack Developer",
  skills:["python", "django", "react", "next"],
  os:["windows", "ubuntu"],
  image:"https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/218315872_4154717857942602_167019143980755224_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WTv8R65eTcEAX_c9Ar1&_nc_ht=scontent.fdel27-5.fna&oh=00_AT9UiUVPgaIL0qp3XvQnXqrAw1b_zzFcZllKpUhCo8bptQ&oe=6317590D"
},

{
  name:"Aditya Dwivedi",
  profession:"MEVN",
  skills:["Html", "Css", "Js", "Vue", "Node", "Mongo"],
  os:["windows", "ubuntu"],
  image:"https://drive.google.com/file/d/1MP8U9Yn6nqVFu654bKyCnE3eN2E5ZpkR/view"
},

{
  name:"Nikhil Gupta",
  profession:"Bhosdiwala",
  skills:["__all__"],
  os:["windows", "ubuntu"],
  image:"https://drive.google.com/drive/folders/14UuaC5r1_kUVUH3m6adsFTfk_hsNvxxL"
},
{
  name:"Himanshu Sharma",
  profession:"Backend",
  skills:["Django", "Python", "JS"],
  os:["windows", "ubuntu"],
  image:"https://drive.google.com/drive/folders/14UuaC5r1_kUVUH3m6adsFTfk_hsNvxxL"
},

{
  name:"Aman Bothra",
  profession:"Bhosdiwala & Chutiya",
  skills:["Django", "Python", "Piche Ungli Karna"],
  os:["windows", "ubuntu"],
  image:"https://drive.google.com/drive/folders/14UuaC5r1_kUVUH3m6adsFTfk_hsNvxxL"
}

]

export default function handler(req, res) {
  console.log(req.query)
  res.status(200).json(data)
}




