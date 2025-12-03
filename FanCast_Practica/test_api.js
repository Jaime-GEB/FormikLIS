import axios from 'axios';

async function testApi(category) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:${category}&gcmtype=page&gcmlimit=5&format=json&origin=*`;
    console.log(`Testing category: ${category}`);
    console.log(`URL: ${url}`);
    try {
        const response = await axios.get(url);
        console.log('Response data:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testApi('Films');
testApi('2023_films'); // Trying a more specific category that likely has pages
