import ReactDom from "react-dom";

const Notification = ({ requestStatusMessage }) => {
  const { status, message } = requestStatusMessage;
  return ReactDom.createPortal(
    <div className="max-w-4xl fixed bottom-0 left-1/2 -translate-x-1/2 w-full ">
      <div className="p-4 bg-primary-pink text-white font-bold text-lg text-center">
        <p>
          <span>{status === "success" ? "👌 " : status === "pending" ? "🔃 " : "💥 "}</span> {message}
        </p>
      </div>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
