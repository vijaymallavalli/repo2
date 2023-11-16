import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NightlightIcon from '@mui/icons-material/Nightlight';

export default function DisplayAccessibility({ setVisible }) {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => ({ ...state }));
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            setVisible(0);
          }}
        >
          <ArrowBackIcon/>
        </div>
        Display & Accessibility
      </div>
      <div className="mmenu_main">
        <div className="small_circle" style={{ width: "50px" }}>
          <NightlightIcon/>
        </div>
        <div className="mmenu_col">
          <span className="mmenu_span1">Dark Mode</span>
          <span className="mmenu_span2">
            Adjust the appearance of Dosthi to reduce glare and give your eyes
            a break.
          </span>
        </div>
      </div>
      <label
        htmlFor="darkOff"
        className="hover1"
        onClick={() => {
          Cookies.set("darkTheme", false);
          dispatch({ type: "LIGHT" });
        }}
      >
        <span>Off</span>
        {darkTheme ? (
          <input type="radio" name="dark" id="darkOff" />
        ) : (
          <input type="radio" name="dark" id="darkOff" checked />
        )}
      </label>
      <label
        htmlFor="darkOn"
        className="hover1"
        onClick={() => {
          Cookies.set("darkTheme", true);
          dispatch({ type: "DARK" });
        }}
      >
        <span>On</span>
        {darkTheme ? (
          <input type="radio" name="dark" id="darkOn" checked />
        ) : (
          <input type="radio" name="dark" id="darkOn" />
        )}
      </label>

    </div>
  );
}
