import ReactPlayer from "react-player";
import styles from './home-video.module.css';

const HomeVideo = () => {
    return (
        <div className={styles.video_wrapper}>
            <ReactPlayer className={styles.video} width={"90rem"} controls={true} playing={true} url="https://mammutworld.faramoujwp.ir/wp-content/uploads/2022/06/تاريخچه-تريلر-LQ.mp4" />
            <div className={styles.backward}></div>
        </div>
    )
};

export default HomeVideo;