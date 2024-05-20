import { Header } from './Header';
import { Posts } from "Posts/Posts";
import { Comments } from "Comments/Comments";

export const Layout = () => {
  return (
    <div className="container mx-auto mb-10 mt-10">
      <Header />
      <div className="mt-12">
        <Posts />
      </div>
      <div className="mt-12">
        <Comments />
      </div>
    </div>
  );
};
