import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getHomePageVideo } from '../store/reducers/getHomePageVideo';
import { Card, Spinner } from '../components';
import { HomePageVideos } from '../Types';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    React.useEffect(() => {
        dispatch(getHomePageVideo(false))
    }, [dispatch])

    return (
        <div className='flex ml-20' style={{ height: "100vh" }}>
            {videos.length ? (
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => dispatch(getHomePageVideo(true))}
                    hasMore={videos.length < 500}
                    loader={<Spinner />}
                    height='100vh'
                    style={{width: '150vh'}}
                >
                    <div className="w-full grid gap-y-14 gap-x-8 grid-cols-4 p-8">
                        {videos.map((items: HomePageVideos, index) => (
                            <Card key={`${items.videoId}${index}`} data={items} />
                        ))}
                    </div>
                </InfiniteScroll>
            ) :
                (
                    <Spinner />
                )
            }
        </div>
    );
};

export default Home;
