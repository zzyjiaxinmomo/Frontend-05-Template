import { Timeline, Animation } from './animation';

let tl = new Timeline();
tl.start();

tl.add(
  new Animation(
    {
      set a(v) {
        console.log(v);
      },
    },
    'a',
    0,
    100,
    2000,
    null
  )
);
