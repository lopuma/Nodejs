console.clear();
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000 );
app.set('views', __dirname, 'views');

//4 - Recursos Publicos
app.use('/resources', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/main.html')
});

// Starting the server
app.listen(app.get('port'), () => {
	console.log('Server is in port ', app.get('port'), `http://localhost:${app.get('port')}`);
});