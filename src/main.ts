import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

/**
 * use json middle Middleware
 */
app.use(express.json());

app.listen(port, () => {
  console.log('This server is start！');
});

app.get('/', (req: Request, res: Response) => {
  res.send('hello ');
});

const data = [
  {
    id: 1,
    title: 'hello world1',
    description: 'this is a description',
  },
  {
    id: 2,
    title: 'hello world2',
    description: 'this is a description',
  },
  {
    id: 3,
    title: 'hello world3',
    description: 'this is a description',
  },
  {
    id: 4,
    title: 'hello world4',
    description: 'this is a description',
  },
];

app.get('/posts', (req: Request, res: Response) => {
  res.send(data);
});

app.get('/posts/:postId', (req: Request, res: Response) => {
  //fetch id
  const { postId } = req.params;

  //find post
  const posts = data.filter((post) => post.id === Number(postId));

  //send post
  res.send(posts[0]);
});

/**
 * create posts
 */
app.post('/posts', (req: Request, res: Response) => {
  //Get the data in the request
  const { content } = req.body;

  //set res status
  res.status(201);

  console.log(req.headers['sing-along']);

  //set res header
  res.setHeader('Sing-Along', 'Yes');

  //Respond
  res.send({
    message: `create successfully ${content}`,
  });
});
