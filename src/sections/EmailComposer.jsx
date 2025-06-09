import { useState } from "react";

const EmailComposer = ({ isOpen, setIsOpen }) => {
  const [copied, setCopied] = useState(false);
  const email = "ralam2102001@gmail.com";
  const email2 = "Md.Raunaq.Alam@gcettb.ac.in";

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => setCopied(true))
        .catch(err => console.error("Clipboard copy failed:", err));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 1500);
  };

  const openMailClient = (service) => {
    let mailtoLink = `mailto:${email}`;
    if (service === "gmail") {
      mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    } else if (service === "outlook") {
      mailtoLink = `https://outlook.office.com/mail/deeplink/compose?to=${email2}&subject&body`;
    } else if (service === "yahoo") {
      mailtoLink = `https://compose.mail.yahoo.com/?to=${email}`;
    }
    window.open(mailtoLink, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Compose new email with</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
        </div>
        <div className="space-y-6">
          <button onClick={() => openMailClient("gmail")} className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-2 rounded-lg flex items-center justify-center">
            Gmail in browser
          </button>
          <button onClick={() => openMailClient("outlook")} className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center">
            Outlook in browser
          </button>
          <button onClick={() => openMailClient("yahoo")} className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center">
            Yahoo in browser
          </button>
          <button onClick={() => window.location.href = `mailto:${email}`} className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center">
            Default email app
          </button>
          <div className="flex items-center bg-black p-2 rounded-lg">
            <span className="flex-1 text-gray-300">{email}</span>
            <button onClick={copyToClipboard} className={`text-white px-3 py-1 rounded-lg text-sm transition-all ${copied ? 'bg-green-500' : 'bg-gray-700 hover:bg-gray-600'}`}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EmailComposer;
