import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const _fileName = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_fileName);

const app = express();
const PORT = 4200;

app.use(express.static(path.join(_dirname, 'src')));

app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
});
