import { SkynetClient, keyPairFromSeed } from "skynet-js";

const client = new SkynetClient();
const { publicKey, privateKey } = keyPairFromSeed("this seed should be fairly long for security");

const dataKey = "myApp";

async function getJSONExample() {
  try {
    const { data, revision } = await client.db.getJSON(publicKey, dataKey);
  } catch (error) {
    console.log(error);
  }
}