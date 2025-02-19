import { useState } from "react";

export default function Project() {
  const [showModal, setShowModal] = useState(false); // Affiche le modal
  const [code, setCode] = useState(""); // Stocke le code saisi
  const [error, setError] = useState(""); // Message d'erreur
  const [accessGranted, setAccessGranted] = useState(false); // Vérifie si le code est correct

  const correctCode = "1234"; // Remplace avec ton code secret

  const handleOpenModal = () => {
    setShowModal(true); // Affiche le modal
    setError(""); // Réinitialise les erreurs
    setCode(""); // Réinitialise le code
  };

  const handleCloseModal = () => {
    setShowModal(false); // Ferme le modal
    setError("");
    setCode("");
  };

  const handleCheckCode = () => {
    if (code === correctCode) {
      setAccessGranted(true); // Accès accordé
      setShowModal(false); // Ferme le modal
      window.location.href =
        "https://github.com/The-WebJunior/business-banking";
    } else {
      setError("Code incorrect. Veuillez réessayer.");
      setCode(""); // Réinitialise le champ
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h1>Parcourir mes</h1>
      <p className="font-extrabold text-4xl">Projets</p>
      <div className="lg:flex lg:flex-row flex-col gap-4 space-y-8">
        <div className="border shadow-lg p-2 rounded-lg w-60 space-y-2 mt-8 h-72 flex flex-col justify-center items-center">
          <div className="shadow-xl border border-gray-200 rounded-3xl">
            <img src="image/White and Blue.png" className="h-48 w-40" />
          </div>
          <p className="font-extrabold text-xs">Business Banking</p>
          <button
            className="border border-gray-500 rounded-full p-4 py-1 font-bold"
            onClick={handleOpenModal}
          >
            GitHub
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Entrer le Code
            </h2>
            <input
              type="password"
              placeholder="Entrer le code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full text-black mb-2"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="flex gap-2">
              <button
                onClick={handleCheckCode}
                className="bg-blue-500 text-white rounded-md px-4 py-2"
              >
                Valider
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 rounded-md px-4 py-2"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
