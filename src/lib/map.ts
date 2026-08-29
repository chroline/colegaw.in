export type MapSources = {
  light: string;
  dark: string;
};

const LIGHT_STYLE = "mapbox/streets-v12";
const DARK_STYLE = "mapbox/dark-v11";

/**
 * Mapbox Static Images API. One retina image per theme, already centred on the
 * coordinate, so the browser only fetches two `<img>`s (and CSS picks the theme).
 */
export function buildMapSources({
  lat,
  lon,
  zoom,
  width,
  height,
}: {
  lat: number;
  lon: number;
  zoom: number;
  width: number;
  height: number;
}): MapSources {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is required for map popovers.");
  }

  return {
    light: staticImageUrl({ style: LIGHT_STYLE, lat, lon, zoom, width, height, accessToken }),
    dark: staticImageUrl({ style: DARK_STYLE, lat, lon, zoom, width, height, accessToken }),
  };
}

function staticImageUrl({
  style,
  lat,
  lon,
  zoom,
  width,
  height,
  accessToken,
}: {
  style: string;
  lat: number;
  lon: number;
  zoom: number;
  width: number;
  height: number;
  accessToken: string;
}): string {
  const params = new URLSearchParams({
    access_token: accessToken,
    attribution: "false",
    logo: "false",
  });

  return `https://api.mapbox.com/styles/v1/${style}/static/${lon},${lat},${zoom}/${width}x${height}@2x?${params}`;
}
