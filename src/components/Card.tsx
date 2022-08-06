import IconEdit from "../icons/IconEdit";
import IconOnline from "../icons/IconOnline";

const Card = (props: { app: string; url: string; statusApp: string }) => {
  return (
    <div className="card d-grid gap-2" style={{ height: "85px" }}>
      <button
        type="button"
        className="btn btn-lg btn-light text-start"
        disabled={props.statusApp === "up" ? true : false}
      >
        <b>Aplicação:</b> {props.app} <br />
        <b>URL:</b> {props.url} <IconOnline />
      </button>

      <div className="position-absolute cursor-point">
        <IconEdit />
      </div>
    </div>
  );
};

export default Card;
