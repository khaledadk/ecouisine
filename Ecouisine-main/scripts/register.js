const express = require('express');
const mysql = require('mysql');
const app = express();

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loginregister'
});

// Connecter à la base de données
connection.connect();

// Gérer les requêtes POST depuis la page HTML
app.post('/login_2', (req, res) => {
  // Récupérer les données du formulaire
  const data = req.body;

  // Exécuter une requête SQL
  const query = `INSERT INTO tb_user ('name', 'email' ,'password') VALUES ('${data.valeur1}', '${data.valeur2}', '${data.valeur2}')`;
   
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send('Données insérées avec succès');
  });
});

// Écouter le serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
