import "./style.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
export default function CreatePost({ user, setVisible, profile }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.picture} alt="" />
        <div
          className="open_post hover2"
          onClick={() => {
            setVisible(true);
          }}
        >
          What's on your mind, {user?.first_name}
        </div>
      </div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <PhotoSizeSelectActualIcon />
          Photo
        </div>
      </div>
    </div>
  );
}
