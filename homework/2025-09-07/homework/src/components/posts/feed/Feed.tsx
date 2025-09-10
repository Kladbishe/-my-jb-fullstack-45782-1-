import { useEffect, useState } from "react";
import type PostModel from "../../../models/post";
import "./Feed.css";
import feedService from "../../../services/feed";
import Post from "../post/Post";
import Spinner from "../../common/spinner/Spinner";
import useTitle from "../../../hooks/useTitle";

export default function Feed() {
  useTitle("Feed");

  const [feed, setFeed] = useState<PostModel[]>([]);

  useEffect(() => {
    feedService.getFeed().then(setFeed).catch(alert);
  }, []);

  return (
    <div className="Feed">
      {feed.length > 0 && (
        <>
          {feed.map((post) => (
            <Post key={post.id} post={post} isEditAllowed={false} />
          ))}
        </>
      )}

      {feed.length === 0 && <Spinner />}
    </div>
  );
}
