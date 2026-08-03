import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/video/potenza-nella-corsa", destination: "/video/primi-30-metri", permanent: true },
      { source: "/video/mobilita-pre-workout", destination: "/video/drills-postura-appoggio", permanent: true },
      { source: "/video/core-per-atleti", destination: "/video/girata-forza-esplosiva", permanent: true },
      { source: "/video/recupero-attivo", destination: "/video/visualizzare-la-gara", permanent: true },
      { source: "/video/salite-in-bici", destination: "/video/doppia-soglia", permanent: true },
      { source: "/video/forza-total-body", destination: "/video/girata-forza-esplosiva", permanent: true },
      { source: "/video/respirazione-nel-nuoto", destination: "/video/lungo-specifico", permanent: true },
      { source: "/video/footwork-tennis", destination: "/video/ritmo-tra-ostacoli", permanent: true },
      { source: "/video/yoga-per-sportivi", destination: "/video/drills-postura-appoggio", permanent: true },
      { source: "/video/interval-training", destination: "/video/doppia-soglia", permanent: true },
      { source: "/video/stretching-serale", destination: "/video/visualizzare-la-gara", permanent: true },
      { source: "/video/endurance-ride", destination: "/video/lungo-specifico", permanent: true },
    ];
  },
};

export default nextConfig;
