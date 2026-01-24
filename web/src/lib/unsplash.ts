const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
export const UNSPLASH_ACCESS_KEY =
  "Q1QGgs_Y0rKSqaXoMRvyz3BWCK_mLDN2EAM6IOvb_-Q";

export async function fetchUnsplashImages(query: string) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=10`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Unsplash images");
  }

  const data = await res.json();
  return data.results;
}
