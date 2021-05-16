exports.getIndexPage = async (req, res) => {

  // REQUETE MYSQL POUR AFFICHER LES INFOS
  const listeCategorie = await querysql ('SELECT nom, descriptin, lien FROM categorie');

  // AFFICHER LA PAGE INDEX
  res.render('index', {categorie: listeCategorie});
}