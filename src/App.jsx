import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Andre Barbosa"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium autem eligendi neque numquam consequatur aspernatur veniam? Consequuntur ad totam tempore, necessitatibus, dolores repellat inventore iure voluptas iusto libero explicabo."
      />
      <Post
        author="Karol Matias"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium autem eligendi neque numquam consequatur aspernatur veniam? Consequuntur ad totam tempore, necessitatibus, dolores repellat inventore iure voluptas iusto libero explicabo."
      />
    </div>
  );
}
