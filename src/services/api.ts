export async function fetchNfts() {
  const page = 1;
  const rows = 32;
  const res = await fetch(
    `https://api-challenge.starsoft.games/api/v1/products?page=${page}&rows=${rows}&sortBy=name&orderBy=ASC`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  return await res.json();
}
