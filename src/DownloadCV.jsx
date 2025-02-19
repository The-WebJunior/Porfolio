export default function DownloadCV() {
  return (
    <a
      href="/PDF/cv haowafall.pdf" // Chemin du fichier dans le dossier public
      download="cv haowafall.pdf" // Nom du fichier lors du téléchargement
      className=" font-bold"
    >
      Télécharger le CV
    </a>
  );
}
