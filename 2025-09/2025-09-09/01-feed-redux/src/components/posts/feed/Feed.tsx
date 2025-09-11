import { useEffect, useState } from "react";

import "./Feed.css";
import feedService from "../../../services/feed";
import Post from "../post/Post";

import Spinner from "../../common/spinner/Spinner";
import useTitle from "../../../hooks/useTitle";
import { useAppDispatcher, useAppSelector } from "../../../redux/hooks";
import { init } from "../../../redux/feed-slice";
import SpinnerButton from "../../common/spinner-buttom/SpinnerButton";

export default function Feed() {
  useTitle("Feed");
 const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
  // const [feed, setFeed] = useState<PostModel[]>([]);
  const feed = useAppSelector((state) => state.feedSlice.posts);
  const isNewContentAvailable = useAppSelector(
    (state) => state.feedSlice.isNewContentAvailable
  );
  const dispatch = useAppDispatcher();

  useEffect(() => {
    (async () => {
      try {
        if (feed.length === 0) {
          const feedFromServer = await feedService.getFeed();
          dispatch(init(feedFromServer));
        }
      } catch (e) {
        alert(e);
      }
    })();
  }, [dispatch, feed.length]);

  async function refresh() {
    try {
      setIsRefreshing(true)
      const feedFromServer = await feedService.getFeed();
      dispatch(init(feedFromServer));
    } catch (e) {
      alert(e);
    }finally{
      setIsRefreshing(false)
    }
  }

  return (
    <div className="Feed">
      {feed.length > 0 && (
        <>
          {isNewContentAvailable && (
            <div className="info-box">
            you have new content available, please refresh{" "}
            <SpinnerButton
            onClick={refresh}
            buttonText="refresh"
            loadingText="refreshing"
            isSubmitting={isRefreshing} />
            </div>
          )}

          {feed.map((post) => (
            <Post key={post.id} post={post} isEditAllowed={false} />
          ))}
        </>
      )}
      {feed.length === 0 && <Spinner />}
    </div>
  );
}
