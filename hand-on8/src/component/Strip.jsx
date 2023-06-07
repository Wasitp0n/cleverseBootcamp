import Strip from "./Strip.module.css";

function Stript(tab) {
  return (
    <div className={Strip.tab}>
      <h4>{tab.con1}</h4>
      <h4 className={Strip.redt}>{tab.con2}</h4>
    </div>
  );
}

export default Stript;
