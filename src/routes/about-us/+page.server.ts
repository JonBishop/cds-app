export async function load() {
	
    const response = await fetch(
        'https://codegen.plasmic.app/api/v1/loader/html/preview/wMvSWG6XGxYCG3u4uhDw8j/AboutUs?hydrate=1&embedHydrate=1',
        {
          headers: {
            // Your project ID and public API token
            'x-plasmic-api-project-tokens': 'wMvSWG6XGxYCG3u4uhDw8j:UL6Lg0UFnDoypdXN8uuoimYkjuFqCbezRqgLaSH2kTGmZCYZwxhSOG6u1YXJDyC7aLzkC1oU84AqAmtDx5Yx0A'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[wMvSWG6XGxYCG3u4uhDw8j]/docs/loader#showToken=true
          }
        }
      );
      const result = await response.json();
    return {
		plasmic: result.html,
	};
}