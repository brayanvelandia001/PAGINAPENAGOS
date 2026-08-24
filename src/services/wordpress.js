const WORDPRESS_URL = "http://localhost/penagos";

export async function getPages() {
  const response = await fetch(
    `${WORDPRESS_URL}/wp-json/wp/v2/pages?per_page=100`
  );

  if (!response.ok) {
    throw new Error("Error conectando con WordPress");
  }

  return response.json();
}