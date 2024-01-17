export async function load() {
	
    const response = await fetch(
      'https://codegen.plasmic.app/api/v1/loader/html/preview/rupsZDhVzjZ1Fck6Tv5ThW/Homepage?hydrate=1&embedHydrate=1',
      {
        headers: {
          // Your project ID and public API token
          'x-plasmic-api-project-tokens': 'rupsZDhVzjZ1Fck6Tv5ThW:i6v5GS8LZyPtvu2AHXn9UCbZTmrlg1VNTbvUK5pXRLdZc708Nvm7rv8UeLUgIZAVLfSzaHbFCybDhsBA'
          // You can find your PROJECT token by visiting
          // https://studio.plasmic.app/projects/[rupsZDhVzjZ1Fck6Tv5ThW]/docs/loader#showToken=true
        }
        }
      );
      const result = await response.json();
    return {
		plasmic: result.html,
	};
}