const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Branch Specific Workflow Demo!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
