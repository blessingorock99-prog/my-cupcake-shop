export default function Toast({ toast }) {
  return <div className={toast.visible ? "fd-toast show" : "fd-toast"}>{toast.msg}</div>;
}
