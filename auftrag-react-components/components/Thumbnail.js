export default function Thumbnail(props) {
  return (
    <div>
      {props.thumbnails.map((thumbnail) => {
        return (
          <div key={thumbnail.title}>
            <img src={thumbnail.img}/>
            <h2>{thumbnail.title}</h2>
            <p>Views: {thumbnail.views}</p>
            <h4>{thumbnail.channelName}</h4>
            <p>{thumbnail.description}</p>
          </div>
        );
      })}
    </div>
  );
}
