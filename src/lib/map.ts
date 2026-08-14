const TILE_SIZE = 256;
const TILE_SUBDOMAINS = ["a", "b", "c", "d"];

export type MapTile = { url: string; left: number; top: number };

/**
 * Web Mercator tile math. Returns a 3x3 grid of basemap tiles positioned so that the
 * given coordinate lands at the centre of a `width` x `height` viewport. Pure arithmetic,
 * so it runs at build time and the browser only requests the tile images.
 */
export function buildTileGrid({
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
}): MapTile[] {
  const worldPx = TILE_SIZE * 2 ** zoom;
  const latRad = (lat * Math.PI) / 180;

  const pointX = ((lon + 180) / 360) * worldPx;
  const pointY = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * worldPx;

  const centerTileX = Math.floor(pointX / TILE_SIZE);
  const centerTileY = Math.floor(pointY / TILE_SIZE);
  const tilesPerAxis = 2 ** zoom;

  const tiles: MapTile[] = [];

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const tileY = centerTileY + dy;
      if (tileY < 0 || tileY >= tilesPerAxis) continue;

      // Wrap horizontally so tiles near the antimeridian still resolve.
      const rawTileX = centerTileX + dx;
      const tileX = ((rawTileX % tilesPerAxis) + tilesPerAxis) % tilesPerAxis;
      const subdomain = TILE_SUBDOMAINS[Math.abs(tileX + tileY) % TILE_SUBDOMAINS.length];

      tiles.push({
        url: `https://${subdomain}.basemaps.cartocdn.com/rastertiles/voyager/${zoom}/${tileX}/${tileY}@2x.png`,
        left: Math.round(width / 2 - (pointX - rawTileX * TILE_SIZE)),
        top: Math.round(height / 2 - (pointY - tileY * TILE_SIZE)),
      });
    }
  }

  return tiles;
}
