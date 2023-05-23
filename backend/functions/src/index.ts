import * as functions from "firebase-functions";
import express from "express";

// TODO: ass express routes to firebase
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
const port = 3000; // Change the port number as per your preference

// Dictionary of game rooms. Key: room code, Value: room object
const gameRooms = {};

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/api/players', (req, res) => {
    // Handle the request and send a response
    res.json({ message: 'List of players' });
});